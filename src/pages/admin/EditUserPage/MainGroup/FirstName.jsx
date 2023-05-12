import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useInitial } from 'hooks'

export default function FirstName() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditUserContext)

  const [value, setValue] = useInitial(initial, 'firstName', '')
  const error = useErrors(errors, 'firstName')

  return (
    <AdminForm.Control
      label="Имя"
      name="firstName"
      error={error}
      value={value}
      onInput={setValue}
      className="col col-6 "
    />
  )
}
