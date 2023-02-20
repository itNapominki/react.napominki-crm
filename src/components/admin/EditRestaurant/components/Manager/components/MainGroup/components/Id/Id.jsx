import React from 'react'
import { Input } from 'components'
import { useErrors } from 'hooks'

export default function Id(data) {
  const { initial, setData, errors } = data

  const [id, setId] = React.useState('')
  React.useEffect(() => setId(initial), [initial])

  const error = useErrors(errors, 'id')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        id,
      }
    })
  }, [id])

  return (
    <Input
      label="ID заведения"
      bigLabel
      error={error}
      value={id}
      onInput={setId}
      className="col col-4"
    />
  )
}
