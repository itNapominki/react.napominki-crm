import React from 'react'
import { Input } from 'components'
import { useErrors, useInitial } from 'hooks'

export default function Street({ initial, setAddress, errors }) {
  const [street, setStreet] = useInitial(initial, 'street', '')
  const error = useErrors(errors, 'street')

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
