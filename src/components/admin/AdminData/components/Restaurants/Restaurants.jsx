import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataTable } from 'components'
import { Api, joinStrings } from 'utils'

export default function Restaurants() {
  console.log('render Restaurants')

  const navigate = useNavigate()

  const { data, error } = Api.getAll({
    model: Api.model.restaurant,
    value: [],
    params: { attributes: ['id', 'title', 'address', 'isPublished'] },
  })

  if (error) {
    alert(error.message)
  }

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
      <Link className="admin-data__add-link" to="/admin/restaurants/add">
        Добавить ресторан
      </Link>
      <div className="admin-data__table">
        <DataTable
          title="Рестораны"
          rows={restaurants}
          cols={cols}
          droplist={[
            {
              text: 'Редактировать',
              onClick: (id) =>
                navigate('/admin/restaurants/' + id + '/edit/info'),
            },
            { text: 'Смотреть карточку' },
            { text: 'Удалить', color: 'red' },
          ]}
        />
      </div>
    </React.Fragment>
  )
}
