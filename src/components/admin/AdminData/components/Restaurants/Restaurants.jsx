import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataTable } from 'components'
import { api, joinStrings } from 'core/utils'

export default function Restaurants() {
  console.log('render Restaurants')

  const navigate = useNavigate()

  const { data, setData, error } = api.getAll({
    model: api.model.restaurant,
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

  const droplist = [
    {
      text: 'Редактировать',
      onClick: (id) => navigate('/admin/restaurants/edit/' + id),
    },
    {
      text: 'Опубликовать',
      onClick: (id) => navigate('/restaurant/' + id),
    },
    {
      text: 'Смотреть карточку',
      onClick: (id) => navigate('/restaurant/' + id),
    },
    {
      text: 'Удалить',
      color: 'red',
      onClick: (id) =>
        api
          .delete({
            model: api.model.restaurant,
            message: 'Подтвердите удаление ресторана',
            id,
          })
          .then(() =>
            setData((prev) => prev.filter((restaurant) => id != restaurant.id))
          ),
    },
  ]

  return (
    restaurants.length > 0 && (
      <DataTable
        title="Рестораны"
        rows={restaurants}
        cols={cols}
        droplist={droplist}
      />
    )
  )
}
