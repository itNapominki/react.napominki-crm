import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'router/routes'
import { api } from 'core/utils'

export default function useDroplist(setData) {
  const navigate = useNavigate()

  return [
    {
      text: 'Редактировать',
      onClick: (id) =>
        navigate(ROUTES.ADMIN_UPDATE_RESTAURANT.PATH.replace(':id', id)),
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
}
