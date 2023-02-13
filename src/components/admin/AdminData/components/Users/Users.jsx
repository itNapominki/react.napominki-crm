import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { DataTable } from 'components'
import { Api } from 'utils'

export default function Users() {
  console.log('render Users')

  const navigate = useNavigate()

  const [roles, setRoles] = React.useState([])
  const { data: users, error } = Api.getAll({
    model: Api.model.user,
    value: [],
  })

  if (error) {
    alert(error.message)
  }

  React.useEffect(() => {
    const filter = (role) => users.filter((user) => user.role === role)

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
  }, [users])

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
        Api.delete({
          model: Api.model.user,
          message: 'Подтвердите удаление пользователя',
          id,
        }),
    },
  ]

  return (
    <React.Fragment>
      <Link className="admin-data__add-link" to="/admin/users/add">
        Добавить пользователя
      </Link>
      {roles?.map((roles) => {
        return (
          <div key={roles.slug} className="admin-data__table">
            <DataTable
              title={roles.title}
              rows={roles.users}
              cols={cols}
              droplist={droplist}
            />
          </div>
        )
      })}
    </React.Fragment>
  )
}
