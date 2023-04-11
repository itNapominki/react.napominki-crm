import React from 'react'

import { AdminForm } from 'components'

import { useErrors, useInitial } from 'hooks'
import { EditRestaurantContext } from 'core/context'

const options = [
  { text: 'Работаем', value: 'Работаем' },
  { text: 'Не работаем', value: 'Не работаем' },
  { text: 'Работаем по согласованию', value: 'Работаем по согласованию' },
  { text: 'Закрыт', value: 'Закрыт' },
]

export default function Status() {
  const { initial, errors } = React.useContext(EditRestaurantContext)

  const [value, setValue] = useInitial(initial, 'status', options[0].value)
  const error = useErrors(errors, 'status')

  return (
    <AdminForm.Control
      type="SELECT"
      label={{ text: 'Статус', size: 'big' }}
      name="status"
      value={value}
      onChange={setValue}
      options={options}
      error={error}
      className="col col-4"
    />
  )
}
