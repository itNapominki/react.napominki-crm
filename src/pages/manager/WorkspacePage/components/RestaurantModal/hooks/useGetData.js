import React from 'react'

import { api } from 'core/utils'
import { MODELS } from 'core/constants'

export default function useGetData(id, added, setMenus) {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    api
      .getOne({
        model: MODELS.RESTAURANT.VALUE,
        id,
      })
      .then(({ data }) => {
        setData(data)

        if (!added) {
          setMenus(data.menus.map((menu) => menu.file.id))
        }
      })
  }, [])

  return [data, setData]
}
