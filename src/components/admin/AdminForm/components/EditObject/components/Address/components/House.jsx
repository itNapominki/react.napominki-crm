import React from 'react'
import { Input } from 'components'
import { EditObjectContext } from 'context'
import { useErrors } from 'hooks'

export default function House(data) {
  const context = React.useContext(EditObjectContext)
  const { errors } = context
  const { house, setHouse } = data

  const error = useErrors(errors, 'address.house')

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
