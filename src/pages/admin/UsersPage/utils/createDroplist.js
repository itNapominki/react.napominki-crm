import { api } from 'core/utils'
import { ROUTES } from 'router/routes'
import { MODELS } from 'core/constants'

export default function createDroplist(setData, id, navigate) {
  return [
    {
      text: 'Редактировать',
      onClick: () =>
        navigate(ROUTES.ADMIN.CHILDREN.USERS_UPDATE.PATH.replace(':id', id)),
    },
    {
      text: 'Удалить',
      color: 'red',
      onClick: () => {
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
