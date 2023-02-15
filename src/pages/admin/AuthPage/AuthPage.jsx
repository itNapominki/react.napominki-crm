import styles from './AuthPage.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Button } from 'components'
import { api } from 'core/utils'
import { setUser } from 'core/store'
import { USER_ROLE } from 'core/constants'
import { ROUTES } from 'core/router/routes'

export default function AuthPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.user.value)

  if (user) {
    return redirect(user.role)
  }

  function redirect(role) {
    if (role === USER_ROLE.ADMIN) {
      return navigate(ROUTES.ADMIN_USERS.PATH)
    }

    if (role === USER_ROLE.REDAKTOR) {
      return navigate(ROUTES.ADMIN_RESTAURANTS.PATH)
    }

    if (role === USER_ROLE.MANAGER) {
      return navigate(ROUTES.WORKSPACE.PATH)
    }
  }

  async function handleLogin(e) {
    e.preventDefault()

    await api.auth
      .login({ email, password })
      .then((user) => {
        dispatch(setUser(user))
        redirect(user.role)
      })
      .catch(({ response }) => console.log(response.data.message))
  }

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>Авторизация</div>
          <form className={styles.form} onSubmit={handleLogin}>
            <Input
              label="Email"
              type="email"
              value={email}
              onInput={setEmail}
              className={styles.input}
            />
            <Input
              label="Пароль"
              type="password"
              value={password}
              onInput={setPassword}
              className={styles.input}
            />
            <Button text="Войти" className={styles.button} />
          </form>
        </div>
      </div>
    </div>
  )
}
