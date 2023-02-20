import React from 'react'
import { useNavigate } from 'react-router-dom'
import { USER_ROLES } from 'core/constants'
import { ROUTES } from 'router/routes'

export default function useRedirect(role) {
  const navigate = useNavigate()

  return function redirect() {
    if (role === USER_ROLES.ADMIN.VALUE) {
      return navigate(ROUTES.ADMIN_USERS.PATH)
    }

    if (role === USER_ROLES.REDAKTOR.VALUE) {
      return navigate(ROUTES.ADMIN_RESTAURANTS.PATH)
    }

    if (role === USER_ROLES.MANAGER.VALUE) {
      return navigate(ROUTES.WORKSPACE.PATH)
    }
  }
}
