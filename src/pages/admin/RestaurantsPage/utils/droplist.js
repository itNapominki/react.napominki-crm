import React from 'react'
import { ROUTES } from 'router/routes'
import { api } from 'core/utils'
import { MODELS } from 'core/constants'

export default function useDroplist(setData, id, isPublished) {
  return [
    {
      text: 'Редактировать',
      onClick: () =>
        window.open(
          ROUTES.ADMIN.CHILDREN.RESTAURANTS_UPDATE.PATH.replace(':id', id),
          '_blank'
        ),
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
      onClick: () =>
        window.open(ROUTES.RESTAURANT.PATH.replace(':id', id), '_blank'),
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
