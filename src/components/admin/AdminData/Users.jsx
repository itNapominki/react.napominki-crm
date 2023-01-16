import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { DataTable } from 'components'
import { useFetch } from 'hooks'

// async function getUsers() {
//   const res = await fetch('http://localhost:5544/users')
//   const data = await res.json()
//   return data
// }

export default function Users() {
  console.log('render Users')

  const users = useFetch('/users')
  const navigate = useNavigate()

  const cols = [
    {
      key: 'fullname',
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

  return (
    <React.Fragment>
      <Link className="admin-data__add-link" to="/admin/add-user">
        Добавить пользователя
      </Link>
      {users?.map((roles) => {
        return (
          <div key={roles.role.value} className="admin-data__table">
            <DataTable
              title={roles.role.text}
              rows={roles.users}
              cols={cols}
              droplist={[
                {
                  text: 'Редактировать',
                  onClick: (id) => navigate('/admin/edit-user/' + id),
                },
                { text: 'Копировать данные для входа' },
                { text: 'Удалить', color: 'red' },
              ]}
            />
          </div>
        )
      })}
    </React.Fragment>
  )
}
