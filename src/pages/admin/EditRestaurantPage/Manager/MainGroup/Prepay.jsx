import React from 'react'

import { AdminForm } from 'components'

import { useErrors, useInitial } from 'hooks'
import { EditRestaurantContext } from 'context'

const options = [
  { text: 'Переводим', value: 'Переводим' },
  { text: 'Не переводим', value: 'Не переводим' },
]

export default function Prepay() {
  const { initial, errors } = React.useContext(EditRestaurantContext)

  const [value, setValue] = useInitial(initial, 'prepay', options[0].value)
  const error = useErrors(errors, 'prepay')

  return (
    <AdminForm.Control
      type="SELECT"
      label={{ text: 'Предоплаты', size: 'big' }}
      name="prepay"
      value={value}
      onChange={setValue}
      options={options}
      error={error}
      className="col col-4"
    />
  )
}
