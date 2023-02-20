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
        navigate(ROUTES.ADMIN_UPDATE_OBJECT.PATH.replace(':id', id)),
    },
    {
      text: 'Удалить',
      color: 'red',
      onClick: (id) =>
        api
          .delete({
            model: api.model.object,
            message: 'Подтвердите удаление объекта',
            id,
          })
          .then(() =>
            setData((prev) => prev.filter((object) => id != object.id))
          ),
    },
  ]
}
