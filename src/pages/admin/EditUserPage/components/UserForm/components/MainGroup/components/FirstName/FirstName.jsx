import React from 'react'
import { AdminForm, Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function FirstName() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditUserContext)

  const value = useInitial(initial, 'firstName', '')
  const error = useErrors(errors, 'firstName')

  return (
    <Input
      label="Имя"
      error={error}
      name="firstName"
      value={value}
      className="col col-6 "
    />
  )
}
