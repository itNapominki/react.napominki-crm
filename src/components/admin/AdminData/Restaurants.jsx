import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFetch } from 'hooks'
import { DataTable } from 'components'
import { joinStrings } from 'utils'

export default function Restaurants() {
  console.log('render Restaurants')

  const data = useFetch('/restaurants')
  const navigate = useNavigate()

  console.log(data)

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

  const restaurants = data?.map((restaurant) => {
    const { city, county, district, street, house } = restaurant.address
    const address = joinStrings([city, county, district, street, house])

    return {
      ...restaurant,
      isPublished: restaurant.isPublished ? 'Опубликован' : 'Не опубликован',
      address,
    }
  })

  return (
    <React.Fragment>
      <Link className="admin-data__add-link" to="/admin/add-restaurant">
        Добавить ресторан
      </Link>
      {restaurants?.map((restaurant) => {
        const { id } = restaurant

        return (
          <div key={id} className="admin-data__table">
            <DataTable
              title="Рестораны"
              rows={restaurants}
              cols={cols}
              droplist={[
                {
                  text: 'Редактировать',
                  onClick: () =>
                    navigate('/admin/edit-restaurant/' + id + '/info'),
                },
                { text: 'Смотреть карточку' },
                { text: 'Удалить', color: 'red' },
              ]}
            />
          </div>
        )
      })}
    </React.Fragment>
  )
}
