import React from 'react'
import { useDispatch } from 'react-redux'

import { setUser } from 'store'
import { api } from 'utils'

export default function Container({ children }) {
  const dispatch = useDispatch()

  React.useEffect(() => {
    api.auth.check().then((user) => dispatch(setUser(user)))
    // .catch(({ response }) => console.log(response))
  }, [])

  return children
}
