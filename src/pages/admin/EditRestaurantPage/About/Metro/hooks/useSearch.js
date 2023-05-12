import React from 'react'

import { MODELS, OBJECT_TYPES } from 'constants'
import { api, getObjKeyName } from 'utils'

export default function useSearch(search) {
  const [searched, setSearched] = React.useState([])

  React.useEffect(() => {
    api
      .getAll({
        model: MODELS.OBJECT.VALUE,
        params: {
          where: { type: getObjKeyName(() => OBJECT_TYPES.METRO) },
          search: { keys: ['title'], value: search },
          attributes: ['title'],
          limit: 10,
        },
      })
      .then(({ data }) => setSearched(data.rows))
  }, [search])

  return searched
}
