import React from 'react'
import { AdminForm } from 'components'
import { EditUserContext } from 'context'
import { useErrors, useInitial } from 'hooks'

export default function Phone() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditUserContext)

  const [value, setValue] = useInitial(initial, 'phone', '')
  const error = useErrors(errors, 'phone')

  return (
    <AdminForm.Control
      type="tel"
      label="Телефон"
      name="phone"
      value={value}
      onInput={setValue}
      error={error}
      className="col col-6"
      mask={['8 (999) 999 99-99']}
    />
  )
}
