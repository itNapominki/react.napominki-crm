import React from 'react'

import { MODELS } from 'core/constants'
import { api } from 'core/utils'

export default function useSearch(search, setMapSettings, setModalFor) {
  const [searched, setSearched] = React.useState([])
  const [searchedVisible, setSearchedVisible] = React.useState()

  React.useEffect(() => {
    if (search.length > 0) {
      api
        .getAll({
          model: MODELS.RESTAURANT.VALUE,
          params: {
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
      },
    }))
  }

  return [searched, searchedVisible, setSearchedVisible]
}
