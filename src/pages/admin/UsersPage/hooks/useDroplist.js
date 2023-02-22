import React from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from 'core/utils'
import { ROUTES } from 'router/routes'
import { MODELS } from 'core/constants'

export default function useDroplist(setData) {
  const navigate = useNavigate()

  return [
    {
      text: 'Редактировать',
      onClick: (id) =>
        navigate(ROUTES.ADMIN_UPDATE_USER.PATH.replace(':id', id)),
    },
    {
      text: 'Удалить',
      color: 'red',
      onClick: (id) => {
        if (window.confirm('Подтвердите удаление пользователя')) {
          api
            .delete({
              model: MODELS.USER.VALUE,
              id,
            })
            .then(() => setData((prev) => prev.filter((user) => id != user.id)))
        }
      },
    },
  ]
}
