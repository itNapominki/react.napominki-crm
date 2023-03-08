import React from 'react'
import { Input } from 'components'
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
      <Input
        type="text"
        name="password"
        label={id ? 'Новый пароль' : 'Пароль'}
        action={{
          text: 'Сгенерировать пароль',
          onClick: handleGeneratePassword,
        }}
        error={error}
        value={password}
        className="col col-6"
      />
      <Input
        type="text"
        name="repeatPassword"
        label="Повторите пароль"
        error={repeatError}
        value={repeatPassword}
        className="col col-6"
      />
    </React.Fragment>
  )
}
