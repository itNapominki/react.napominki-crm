import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Input, Button } from 'components'
import { Api } from 'utils'
import { setUser } from 'reducers'

export default function AuthPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogin() {
    Api.auth.login({ email, password }).then((user) => {
      dispatch(setUser(user))

      const { role } = user

      if (role === 'admin') {
        return navigate('/admin/data/users')
      }

      if (role === 'redaktor') {
        return navigate('/admin/data/restaurants')
      }

      if (role === 'manager') {
        return navigate('/manager')
      }
    })
  }

  return (
    <div className="wrapper">
      <div className="auth">
        <div className="auth__card">
          <div className="auth__title">Авторизация</div>
          <div className="auth__form">
            <Input
              label="Email"
              type="email"
              value={email}
              onInput={setEmail}
              className="auth__input"
            />
            <Input
              label="Пароль"
              type="password"
              value={password}
              onInput={setPassword}
              className="auth__input"
            />
            <Button
              text="Войти"
              className="auth__button"
              onClick={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
