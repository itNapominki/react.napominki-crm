import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from 'store'
import { api } from 'utils'

export default function useLogin(email, password) {
  const dispatch = useDispatch()

  return async function handleLogin(e) {
    e.preventDefault()

    await api.auth
      .login({ email, password })
      .then((user) => dispatch(setUser(user)))
      .catch(({ response }) => console.log(response))
  }
}
