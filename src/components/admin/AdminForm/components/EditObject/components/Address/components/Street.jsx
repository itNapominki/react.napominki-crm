import React from 'react'
import { Input } from 'components'
import { EditObjectContext } from 'context'
import { useErrors } from 'hooks'

export default function Street(data) {
  const context = React.useContext(EditObjectContext)
  const { errors } = context
  const { street, setStreet } = data

  const error = useErrors(errors, 'address.street')

  return (
    <Input
      label="Улица"
      error={error}
      value={street}
      onInput={setStreet}
      className="col col-4"
    />
  )
}
