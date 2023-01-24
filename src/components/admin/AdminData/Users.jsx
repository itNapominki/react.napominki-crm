import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { DataTable } from 'components'
import { useFetch } from 'hooks'
import { api } from 'utils'

export default function Users() {
  console.log('render Users')

  const navigate = useNavigate()

  const users = useFetch('/users')
  const [data, setData] = React.useState()

  React.useEffect(() => {
    if (users) {
      const roles = [
        {
          title: 'Админы',
          slug: 'admin',
          users: users.filter(({ role }) => role === 'admin'),
        },
        {
          title: 'Менеджеры',
          slug: 'manager',
          users: users.filter(({ role }) => role === 'manager'),
        },
        {
          title: 'Редакторы',
          slug: 'redaktor',
          users: users.filter(({ role }) => role === 'redaktor'),
        },
      ].filter(({ users }) => users.length > 0)

      setData(roles)
    }
  }, [users])

  const handleDelete = async (id) => {
    if (window.confirm('Подтвердите удаление пользователя')) {
      await api.users
        .delete(id)
        .then(() => navigate('/admin/users'))
        .catch(({ response }) => {
          const { message } = response.data

          alert(message)
        })
    }
  }

  const cols = [
    {
      key: 'firstName',
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
      onClick: (id) => navigate('/admin/edit-user/' + id),
    },
    { text: 'Копировать данные для входа' },
    {
      text: 'Удалить',
      color: 'red',
      onClick: (id) => handleDelete(id),
    },
  ]

  return (
    <React.Fragment>
      <Link className="admin-data__add-link" to="/admin/add-user">
        Добавить пользователя
      </Link>
      {data?.map((roles) => {
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
