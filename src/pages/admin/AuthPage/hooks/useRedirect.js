import React from 'react'
import { useNavigate } from 'react-router-dom'
import { USER_ROLES } from 'core/constants'
import { ROUTES } from 'router/routes'
import { getObjKeyName } from 'core/utils'

export default function useRedirect(role) {
  const navigate = useNavigate()

  return function redirect() {
    if (role === getObjKeyName(() => USER_ROLES.ADMIN)) {
      return navigate(ROUTES.ADMIN_USERS.PATH)
    }

    if (role === getObjKeyName(() => USER_ROLES.REDAKTOR)) {
      return navigate(ROUTES.ADMIN_RESTAURANTS.PATH)
    }

    if (role === getObjKeyName(() => USER_ROLES.MANAGER)) {
      return navigate(ROUTES.WORKSPACE.PATH)
    }
  }
}
