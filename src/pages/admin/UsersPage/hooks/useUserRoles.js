import React from 'react'
import { USER_ROLES } from 'core/constants'

export default function useUserRoles(data) {
  const [roles, setRoles] = React.useState([])

  React.useEffect(() => {
    const filter = (role) => data.filter((user) => user.role === role)

    const roles = [
      {
        title: 'Админы',
        slug: USER_ROLES.ADMIN.VALUE,
        users: filter(USER_ROLES.ADMIN.VALUE),
      },
      {
        title: 'Менеджеры',
        slug: USER_ROLES.MANAGER.VALUE,
        users: filter(USER_ROLES.MANAGER.VALUE),
      },
      {
        title: 'Редакторы',
        slug: USER_ROLES.REDAKTOR.VALUE,
        users: filter(USER_ROLES.REDAKTOR.VALUE),
      },
    ].filter(({ users }) => users.length > 0)

    setRoles(roles)
  }, [data])

  return roles
}
