import React from 'react'
import { AdminLayout, DataTable } from 'components/admin'
import { useScrollLoad } from 'hooks'
import { addressToString } from 'core/utils'
import { droplist } from './utils'

export default function RestaurantsPage() {
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
    <AdminLayout fetching={fetching} data={data.length > 0}>
      {data.length > 0 && (
        <DataTable
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
      )}
    </AdminLayout>
  )
}
