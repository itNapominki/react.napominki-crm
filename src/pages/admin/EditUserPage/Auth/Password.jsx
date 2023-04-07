import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'core/context'
import { generatePassword } from 'core/utils'
import { useErrors } from 'hooks'

export default function Password() {
  const {
    error: { errors },
    id,
  } = React.useContext(EditUserContext)

  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')

  const error = useErrors(errors, 'password')
  const repeatError = useErrors(errors, 'repeatPassword')

  function handleGeneratePassword() {
    const password = generatePassword()

    setPassword(password)
    setRepeatPassword(password)
  }

  return (
    <React.Fragment>
      <AdminForm.Control
        type="text"
        name="password"
        label={id ? 'Новый пароль' : 'Пароль'}
        action={{
          text: 'Сгенерировать пароль',
          onClick: handleGeneratePassword,
        }}
        error={error}
        value={password}
        onInput={setPassword}
        className="col col-6"
      />
      <AdminForm.Control
        type="text"
        name="repeatPassword"
        label="Повторите пароль"
        error={repeatError}
        value={repeatPassword}
        onInput={setRepeatPassword}
        className="col col-6"
      />
    </React.Fragment>
  )
}
