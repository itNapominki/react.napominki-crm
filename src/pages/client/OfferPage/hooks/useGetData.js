import React from 'react'

import { api } from 'core/utils'
import { MODELS } from 'core/constants'

export default function useGetData(decrypted) {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    api
      .getAll({
        model: MODELS.RESTAURANT.VALUE,
        params: { where: { id: decrypted.map(({ id }) => id) } },
      })
      .then(({ data }) => setData(data.rows))
      .catch((e) => console.log(e))
  }, [])

  return [data]
}
