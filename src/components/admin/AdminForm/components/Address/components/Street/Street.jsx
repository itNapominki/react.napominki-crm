import React from 'react'
import { Input } from 'components'
import { useErrors } from 'core/hooks'

export default function Street(data) {
  const { initialState, setAddress, errors } = data

  const [street, setStreet] = React.useState('')
  const error = useErrors(errors, 'address.street')

  React.useEffect(() => setStreet(initialState.street), [initialState])

  React.useEffect(() => {
    setAddress((prev) => {
      return { ...prev, street }
    })
  }, [street])

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
