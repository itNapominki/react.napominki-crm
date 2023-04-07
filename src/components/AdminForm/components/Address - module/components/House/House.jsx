import React from 'react'
import { Input } from 'components'
import { useInitial, useErrors } from 'hooks'

export default function House({ initial, setAddress, errors }) {
  const [house, setHouse] = useInitial(initial, 'house', '')
  const error = useErrors(errors, 'house')

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
