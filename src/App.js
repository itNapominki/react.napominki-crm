import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from 'core/store'
import { api } from 'core/utils'
import { Forbidden } from 'components/general'
import Router from 'core/router'

function App() {
  const dispatch = useDispatch()

  const [forbidden, setForbidden] = React.useState(false)

  React.useEffect(() => {
    async function check() {
      await api.auth
        .check()
        .then((user) => dispatch(setUser(user)))
        .catch(() => setForbidden(true))
    }

    check()
  }, [])

  if (forbidden) {
    return <Forbidden />
  }

  return <Router />
}

export default App
