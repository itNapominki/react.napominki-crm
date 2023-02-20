import React from 'react'
import { AdminLayout, DataTable } from 'components/admin'
import { useScrollLoad } from 'hooks'
import { addressToString } from 'core/utils'
import { useDroplist } from './hooks'

export default function RestaurantsPage() {
  const [data, setData, fetching] = useScrollLoad('restaurant', {
    attributes: ['id', 'title', 'address', 'status'],
  })

  const droplist = useDroplist(setData)

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
            const { city, county, district, street, house } = restaurant.address

            const address = addressToString({
              city,
              county,
              district,
              street,
              house,
            })

            return {
              ...restaurant,
              isPublished: restaurant.isPublished
                ? 'Опубликован'
                : 'Не опубликован',
              address,
            }
          })}
          cols={cols}
          droplist={droplist}
        />
      )}
    </AdminLayout>
  )
}
