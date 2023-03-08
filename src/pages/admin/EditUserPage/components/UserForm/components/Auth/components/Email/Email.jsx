import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function Email() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditUserContext)

  const email = useInitial(initial, 'email', '')
  const error = useErrors(errors, 'email')

  return (
    <Input
      type="email"
      label="Email"
      name="email"
      error={error}
      value={email}
      className="col col-12 "
    />
  )
}
