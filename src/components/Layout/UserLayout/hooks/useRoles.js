import React from 'react'
import { useLocation } from 'react-router-dom'

export default function useRoles(user) {
  const { pathname } = useLocation()

  const [allowed, setAllowed] = React.useState(null)
  const [roles, setRoles] = React.useState([])

  React.useEffect(() => {
    setAllowed(null)
  }, [pathname])

  React.useEffect(() => {
    if (roles.length === 0) {
      return setAllowed(null)
    }

    setAllowed(user && roles.indexOf(user.role) !== -1)
  }, [roles, user])

  function useSetRoles(array) {
    React.useEffect(() => {
      setRoles(array)
    }, [])
  }

  return [allowed, useSetRoles]
}
