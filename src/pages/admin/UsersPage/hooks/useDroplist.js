import React from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from 'core/utils'
import { ROUTES } from 'router/routes'

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
      onClick: (id) =>
        api
          .delete({
            model: api.model.user,
            message: 'Подтвердите удаление пользователя',
            id,
          })
          .then(() => setData((prev) => prev.filter((user) => id != user.id))),
    },
  ]
}
