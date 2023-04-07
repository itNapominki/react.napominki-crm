import React from 'react'
import { useOutletContext } from 'react-router-dom'

import { AdminDataCard, AdminDataTable } from 'components'

import { useScrollLoad } from 'hooks'
import { addressToString, getObjKeyName } from 'core/utils'
import { droplist } from './utils'
import { USER_ROLES } from 'core/constants'
import { ROUTES } from 'router/routes'

export default function RestaurantsPage() {
  const { setRoles } = useOutletContext()
  setRoles([
    getObjKeyName(() => USER_ROLES.ADMIN),
    getObjKeyName(() => USER_ROLES.REDAKTOR),
  ])

  const [data, setData, fetching] = useScrollLoad('restaurant', {
    attributes: ['id', 'title', 'address', 'isPublished'],
    order: [['title', 'ASC']],
  })

  const cols = [
    {
      key: 'title',
      name: 'Название',
      percentWidth: 42,
    },
    {
      key: 'address',
      name: 'Адрес',
      percentWidth: 29,
    },
    {
      key: 'isPublished',
      name: 'Статус',
      percentWidth: 36,
    },
  ]

  return (
    <AdminDataCard
      fetching={fetching}
      link={{
        text: 'Добавить ресторан',
        path: ROUTES.ADMIN.CHILDREN.RESTAURANTS_CREATE.PATH,
      }}
    >
      <AdminDataTable
        title="Рестораны"
        rows={data.map((restaurant) => {
          const { id, isPublished, address } = restaurant
          const { city, county, district, street, house } = address

          const addressString = addressToString({
            city,
            county,
            district,
            street,
            house,
          })

          return {
            ...restaurant,
            isPublished: isPublished ? 'Опубликован' : 'Не опубликован',
            address: addressString,
            droplist: droplist(setData, id, isPublished),
          }
        })}
        cols={cols}
      />
    </AdminDataCard>
  )
}
