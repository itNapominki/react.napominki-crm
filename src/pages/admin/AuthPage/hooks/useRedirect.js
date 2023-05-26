import React from 'react'
import { useNavigate } from 'react-router-dom'
import { USER_ROLES } from 'constants'
import { ROUTES } from 'router/routes'
import { getObjKeyName } from 'utils'

export default function useRedirect(role) {
  const navigate = useNavigate()

  return function redirect() {
    if (role === getObjKeyName(() => USER_ROLES.ADMIN)) {
      return navigate(ROUTES.ADMIN.CHILDREN.USERS.PATH)
    }

    if (role === getObjKeyName(() => USER_ROLES.REDAKTOR)) {
      return navigate(ROUTES.ADMIN.CHILDREN.RESTAURANTS.PATH)
    }

    if (role === getObjKeyName(() => USER_ROLES.MANAGER)) {
      return navigate(ROUTES.MANAGER.CHILDREN.WORKSPACE.PATH)
    }
  }
}
