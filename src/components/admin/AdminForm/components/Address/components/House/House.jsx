import React from 'react'
import { Input } from 'components'
import { useErrors } from 'hooks'

export default function House(data) {
  const [house, setHouse] = React.useState('')
  const { setAddress, errors } = data

  const error = useErrors(errors, 'address.house')

  React.useEffect(() => {
    setAddress((prev) => {
      return { ...prev, house }
    })
  }, [house])

  return (
    <Input
      label="Дом, корпус, литер"
      error={error}
      value={house}
      onInput={setHouse}
      className="col col-4"
    />
  )
}
