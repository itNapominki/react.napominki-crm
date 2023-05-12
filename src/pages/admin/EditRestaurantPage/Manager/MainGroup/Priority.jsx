import React from 'react'

import { AdminForm } from 'components'

import { useErrors, useInitial } from 'hooks'
import { EditRestaurantContext } from 'context'

const options = [
  { text: '1', value: 1 },
  { text: '2', value: 2 },
  { text: '3', value: 3 },
  { text: '4', value: 4 },
  { text: '5', value: 5 },
]

export default function Priority() {
  const { initial, errors } = React.useContext(EditRestaurantContext)

  const [value, setValue] = useInitial(initial, 'priority', options[0].value)
  const error = useErrors(errors, 'priority')

  return (
    <AdminForm.Control
      type="SELECT"
      label={{ text: 'Приоритет загрузки', size: 'big' }}
      name="priority"
      value={value}
      onChange={setValue}
      options={options}
      error={error}
      className="col col-4"
    />
  )
}
