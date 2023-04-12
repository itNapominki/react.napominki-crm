import React from 'react'

import { api } from 'core/utils'
import { MODELS } from 'core/constants'

export default function useGetData(id, added) {
  const [data, setData] = React.useState()
  const [menus, setMenus] = React.useState([])

  React.useEffect(() => {
    api
      .getOne({
        model: MODELS.RESTAURANT.VALUE,
        id,
      })
      .then(({ data }) => {
        setData(data)
      })
  }, [])

  React.useEffect(() => {
    if (data) {
      api
        .getAll({
          model: MODELS.MENU.VALUE,
          params: { where: { id: data.menus.map(({ id }) => id) } },
        })
        .then(({ data: d }) =>
          setMenus(
            d.map((menu) => {
              return {
                ...menu,
                ...data.menus.find(({ id }) => id === menu.id),
                added: added
                  ? added.menus.find(({ id }) => menu.id === id)
                  : true,
              }
            })
          )
        )
    }
  }, [data])

  return [data, menus, setMenus]
}
