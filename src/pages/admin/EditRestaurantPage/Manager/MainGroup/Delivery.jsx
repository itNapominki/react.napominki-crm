import React from 'react'

import { AdminForm } from 'components'

import { useErrors, useInitial } from 'hooks'
import { EditRestaurantContext } from 'core/context'

const options = [
  { text: 'Да', value: 'Да' },
  { text: 'Нет', value: 'Нет' },
]

export default function Delivery() {
  const { initial, errors } = React.useContext(EditRestaurantContext)

  const [value, setValue] = useInitial(initial, 'delivery', options[0].value)
  const error = useErrors(errors, 'delivery')

  return (
    <AdminForm.Control
      type="SELECT"
      label={{ text: 'Доставка', size: 'big' }}
      name="delivery"
      value={value}
      onChange={setValue}
      options={options}
      error={error}
      className="col col-4"
    />
  )
}
