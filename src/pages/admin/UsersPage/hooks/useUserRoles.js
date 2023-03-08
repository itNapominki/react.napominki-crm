import React from 'react'
import { USER_ROLES } from 'core/constants'

export default function useUserRoles(data) {
  const [roles, setRoles] = React.useState([])

  React.useEffect(() => {
    const filter = (role) => data.filter((user) => user.role === role)

    let roles = Object.keys(USER_ROLES)
      .map((ROLE) => {
        return {
          title: USER_ROLES[ROLE].PLURAL_VALUE,
          slug: ROLE,
          users: filter(ROLE),
        }
      })
      .filter(({ users }) => users.length > 0)

    setRoles(roles)
  }, [data])

  return roles
}
