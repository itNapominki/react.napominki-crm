import React from 'react'

import { MODELS } from 'constants'
import { api } from 'utils'

export default function useSearch(search, setMapSettings, setModalFor) {
  const [searched, setSearched] = React.useState([])
  const [searchedCoords, setSearchedCoords] = React.useState('')
  const [searchedVisible, setSearchedVisible] = React.useState()

  React.useEffect(() => {
    if (search.length > 0) {
      api
        .getAll({
          model: MODELS.RESTAURANT.VALUE,
          params: {
            where: { isPublished: true },
            search: { keys: ['title', 'cardTitle', 'address'], value: search },
            attributes: ['id', 'cardTitle', 'title', 'point', 'address'],
            limit: 10,
          },
        })
        .then(({ data }) => {
          setSearched(mapSearched(data.rows))

          setSearchedVisible(data.rows.length > 0)
        })
    } else {
      setSearched([])
      setSearchedVisible(false)
    }
  }, [search])

  function mapSearched(data) {
    return data.map(({ title, cardTitle, point, address, id }) => ({
      id,
      text: [cardTitle, title, address].join(', '),
      onClick: () => {
        setMapSettings((prev) => ({
          ...prev,
          center: point.coordinates,
          zoom: 12,
        }))

        setModalFor(id)
        setSearchedVisible(false)

        setSearchedCoords(point.coordinates.join(','))
      },
    }))
  }

  return [searched, searchedVisible, setSearchedVisible, searchedCoords]
}
