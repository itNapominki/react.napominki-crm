import { ROUTES } from 'router/routes'
import { api } from 'utils'
import { MODELS } from 'constants'

export default function createDroplist(setData, id, isPublished, navigate) {
  return [
    {
      text: 'Редактировать',
      onClick: () =>
        navigate(
          ROUTES.ADMIN.CHILDREN.RESTAURANTS_UPDATE.PATH.replace(':id', id)
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
          .then(() =>
            setData((prev) =>
              prev.map((restaurant) => {
                if (restaurant.id === id) {
                  restaurant.isPublished = !isPublished
                }

                return restaurant
              })
            )
          )
          .catch(({ response }) => alert(response.data.message)),
    },
    {
      text: 'Смотреть карточку',
      onClick: () =>
        navigate(ROUTES.OFFER.CHILDREN.RESTAURANT.PATH.replace(':id', id)),
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
