import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'router/routes'
import { api } from 'core/utils'
import { MODELS } from 'core/constants'

export default function useDroplist(setData, id, isPublished, navigate) {
  return [
    {
      text: 'Редактировать',
      onClick: () =>
        navigate(ROUTES.ADMIN_UPDATE_RESTAURANT.PATH.replace(':id', id)),
    },
    {
      text: isPublished ? 'Снять с публикации' : 'Опубликовать',
      onClick: () =>
        api
          .publicate({
            model: MODELS.RESTAURANT.VALUE,
            id,
            data: { isPublished: !isPublished },
          })
          .then(({ data }) => alert(data.message))
          .catch(({ response }) => alert(response.data.message)),
    },
    {
      text: 'Смотреть карточку',
      onClick: () => navigate('/restaurant/' + id),
    },
    {
      text: 'Удалить',
      color: 'red',
      onClick: () => {
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
