import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'router/routes'
import { api } from 'core/utils'
import { MODELS } from 'core/constants'

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
      onClick: (id) => {
        if (window.confirm('Подтвердите удаление ресторана')) {
          api
            .delete({
              model: MODELS.RESTAURANT.VALUE,
              id,
            })
            .then(() =>
              setData((prev) =>
                prev.filter((restaurant) => id != restaurant.id)
              )
            )
        }
      },
    },
  ]
}
