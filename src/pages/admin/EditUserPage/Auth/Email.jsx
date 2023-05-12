import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useInitial } from 'hooks'

export default function Email() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditUserContext)

  const [value, setValue] = useInitial(initial, 'email', '')
  const error = useErrors(errors, 'email')

  return (
    <AdminForm.Control
      type="email"
      label="Email"
      name="email"
      error={error}
      value={value}
      onInput={setValue}
      className="col col-12 "
    />
  )
}
