import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFetch } from 'hooks'
import { DataTable } from 'components'

export default function Restaurants() {
  console.log('render Restaurants')

  const data = useFetch('/restaurants')
  const navigate = useNavigate()

  const cols = [
    {
      key: 'name',
      name: 'Название',
      percentWidth: 42,
    },
    {
      key: 'address',
      name: 'Адрес',
      percentWidth: 29,
    },
    {
      key: 'status',
      name: 'Статус',
      percentWidth: 36,
    },
  ]

  const restaurants = data?.map((restaurant) => {
    const address = Object.values(restaurant.address).join(', ')
    return {
      ...restaurant,
      address,
    }
  })

  return (
    <React.Fragment>
      <Link className="admin-data__add-link" to="/admin/add-restaurant">
        Добавить ресторан
      </Link>
      {restaurants?.map((restaurant) => {
        const { _id } = restaurant

        return (
          <div key={_id} className="admin-data__table">
            <DataTable
              title="Рестораны"
              rows={restaurants}
              cols={cols}
              droplist={[
                {
                  text: 'Редактировать',
                  onClick: () => navigate('/admin/add-restaurant/' + _id),
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
