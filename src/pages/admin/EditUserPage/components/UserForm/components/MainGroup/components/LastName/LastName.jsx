import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function LastName() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditUserContext)

  const value = useInitial(initial, 'lastName', '')
  const error = useErrors(errors, 'lastName')

  return (
    <React.Fragment>
      <Input
        label="Фамилия"
        name="lastName"
        value={value}
        error={error}
        className="col col-6 "
      />
    </React.Fragment>
  )
}
