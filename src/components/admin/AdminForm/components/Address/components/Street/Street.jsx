import React from 'react'
import { Input } from 'components'
import { useErrors } from 'hooks'

export default function Street(data) {
  const [street, setStreet] = React.useState('')
  const { setAddress, errors } = data

  const error = useErrors(errors, 'address.street')

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
