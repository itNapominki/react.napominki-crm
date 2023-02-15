import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DataTable, Separator } from 'components'
import { api } from 'core/utils'

export default function Users() {
  console.log('render Users')

  const navigate = useNavigate()

  const [roles, setRoles] = React.useState([])
  const { data, setData, error } = api.getAll({
    model: api.model.user,
    value: [],
  })

  React.useEffect(() => {
    const filter = (role) => data.filter((user) => user.role === role)

    const roles = [
      {
        title: 'Админы',
        slug: 'admin',
        users: filter('admin'),
      },
      {
        title: 'Менеджеры',
        slug: 'manager',
        users: filter('manager'),
      },
      {
        title: 'Редакторы',
        slug: 'redaktor',
        users: filter('redaktor'),
      },
    ].filter(({ users }) => users.length > 0)

    setRoles(roles)
  }, [data])

  const cols = [
    {
      key: ['firstName', 'lastName'],
      name: 'ФИО',
      percentWidth: 42,
    },
    {
      key: 'email',
      name: 'Почта',
      percentWidth: 29,
    },
    {
      key: 'phone',
      name: 'Телефон',
      percentWidth: 36,
    },
  ]

  const droplist = [
    {
      text: 'Редактировать',
      onClick: (id) => navigate('/admin/users/' + id + '/edit'),
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

  return roles?.map((role, i) => {
    return (
      <React.Fragment key={role.slug}>
        <DataTable
          title={role.title}
          rows={role.users}
          cols={cols}
          droplist={droplist}
        />
        {i < roles.length - 1 && <Separator />}
      </React.Fragment>
    )
  })
}
