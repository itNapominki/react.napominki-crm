import React from 'react'
import { useSelector } from 'react-redux'

export default function useCheckRole(roles) {
  const [access, setAccess] = React.useState(false)
  const user = useSelector((state) => state.user.value)

  console.log(user, access)

  React.useEffect(() => {
    for (let role of roles) {
      if (user && user.role === role) {
        return setAccess(true)
      }
    }
  }, [user])

  return access
}
