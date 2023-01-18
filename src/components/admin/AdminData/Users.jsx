import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { DataTable } from 'components'
import { useFetch } from 'hooks'
import { api } from 'utils'

export default function Users() {
  console.log('render Users')

  const navigate = useNavigate()

  const users = useFetch('/users', [])
  const serverRoles = useFetch('/users-roles', [], handleRolesLoad)
  const [localRoles, setLocalRoles] = React.useState([])
  const [data, setData] = React.useState()

  function handleRolesLoad(data) {
    const arr = data.map((elem) => {
      return {
        id: elem.id,
        title: elem.plural_value,
      }
    })

    setLocalRoles(arr)
  }

  React.useEffect(() => {
    if (users.length > 0 && serverRoles.length > 0) {
      const data = localRoles
        .map((role) => {
          const arr = users.filter(({ role_id }) => role_id === role.id)

          if (arr.length > 0) {
            return {
              ...role,
              users: arr,
            }
          }

          return null
        })
        .filter((role) => role != null)

      setData(data)
    }
  }, [users, localRoles])

  async function handleRemove(id) {
    if (window.confirm('Подтвердите удаление пользователя')) {
      await api.users.remove(id).then((res) => {
        console.log(res)
      })
    }
  }

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

  const droplist = [
    {
      text: 'Редактировать',
      onClick: (id) => navigate('/admin/edit-user/' + id),
    },
    { text: 'Копировать данные для входа' },
    {
      text: 'Удалить',
      color: 'red',
      onClick: (id) => handleRemove(id),
    },
  ]

  return (
    <React.Fragment>
      <Link className="admin-data__add-link" to="/admin/add-user">
        Добавить пользователя
      </Link>
      {data?.map((roles) => {
        return (
          <div key={roles.id} className="admin-data__table">
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
