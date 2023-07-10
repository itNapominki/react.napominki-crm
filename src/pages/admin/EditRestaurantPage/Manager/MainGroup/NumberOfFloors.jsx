import React from 'react'

import { AdminForm } from 'components'

import { useErrors, useInitial } from 'hooks'
import { EditRestaurantContext } from 'context'

const options = [
  { text: 'Не выбрано', value: 'Не выбрано' },
  { text: '1 этаж', value: '1 этаж' },
  { text: '2 этажа', value: '2 этажа' },
  { text: '3 этажа', value: '3 этажа' },
  { text: '4 этажа', value: '4 этажа' },
  { text: '5 этажей', value: '5 этажей' },
  { text: '6 этажей', value: '6 этажей' },
  { text: '7 этажей', value: '7 этажей' },
  { text: '8 этажей', value: '8 этажей' },
  { text: '9 этажей', value: '9 этажей' },
  { text: '10 этажей', value: '10 этажей' },
  
]

export default function NumberOfFloors() {
  const { initial, errors } = React.useContext(EditRestaurantContext)

  const [value, setValue] = useInitial(initial, 'numberOfFloors', options[0].value)
  const error = useErrors(errors, 'numberOfFloors')

  return (
    <AdminForm.Control
      type="SELECT"
      label={{ text: 'Количество этажей', size: 'big' }}
      name="numberOfFloors"
      value={value}
      onChange={setValue}
      options={options}
      error={error}
      className="col col-4"
    />
  )
}
