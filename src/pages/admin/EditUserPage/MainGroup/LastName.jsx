import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function LastName() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditUserContext)

  const [value, setValue] = useInitial(initial, 'lastName', '')
  const error = useErrors(errors, 'lastName')

  return (
    <React.Fragment>
      <AdminForm.Control
        type="text"
        label="Фамилия"
        name="lastName"
        value={value}
        onInput={setValue}
        error={error}
        className="col col-6"
      />
    </React.Fragment>
  )
}
