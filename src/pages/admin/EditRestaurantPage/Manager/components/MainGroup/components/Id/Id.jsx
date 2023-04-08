import React from 'react'
import { Input } from 'components'
import { useErrors } from 'hooks'

export default function Id(data) {
  const { initial, errors } = data

  const [id, setId] = React.useState('')
  React.useEffect(() => setId(initial), [initial])

  const error = useErrors(errors, 'id')

  return (
    <Input
      label="ID заведения"
      bigLabel
      name="id"
      value={id}
      error={error}
      className="col col-4"
    />
  )
}
