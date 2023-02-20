import styles from './AuthPage.module.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { Input, Button } from 'components'
import { useLogin, useRedirect } from './hooks'

export default function AuthPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const user = useSelector((state) => state.user.value)

  const redirect = useRedirect(user ? user.role : null)
  const handleLogin = useLogin(email, password)

  if (user) {
    return redirect()
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
