import { Input, Button } from '../components'

export default function AuthPage() {
  return (
    <div className="wrapper">
      <div className="auth">
        <div className="auth__card">
          <div className="auth__title">Авторизация</div>
          <form className="auth__form">
            <Input label="Email" type="email" className="auth__input" />
            <Input label="Пароль" type="password" className="auth__input" />
            <Button text="Войти" className="auth__button" />
          </form>
        </div>
      </div>
    </div>
  )
}
