import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { useErrors, useInitial } from 'hooks'

export default function Phone() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditUserContext)

  const phone = useInitial(initial, 'phone', '')
  const error = useErrors(errors, 'phone')

  return (
    <Input
      type="tel"
      label="Телефон"
      name="phone"
      value={phone}
      error={error}
      className="col col-6"
      mask={['8 (999) 999 99-99']}
    />
  )
}
