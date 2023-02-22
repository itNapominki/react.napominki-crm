import React from 'react'
import { useSelector } from 'react-redux'

export default function useCheckRole(roles) {
  const user = useSelector((state) => state.user.value)

  if (!user) {
    return false
  }

  for (let role of roles) {
    if (user.role === role) {
      return true
    }
  }

  return false
}
