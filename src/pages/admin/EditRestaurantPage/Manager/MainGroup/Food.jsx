import React from 'react'

import { AdminForm } from 'components'

import { useErrors, useInitial } from 'hooks'
import { EditRestaurantContext } from 'context'

export default function Food() {
  const { initial, errors } = React.useContext(EditRestaurantContext)

  const [from, setFrom] = React.useState('...')
  const options = [
    {
      text: 'Не возим',
      value: 'Не возим',
      onClick: () => setFrom('...'),
    },
    {
      text: `Возим от ${from} рублей`,
      value: `Возим от ${from} рублей`,
      onClick: () => setFrom(prompt('Введите значение')),
    },
  ]

  const [value, setValue] = useInitial(initial, 'food', options[0].value)
  const error = useErrors(errors, 'food')

  React.useEffect(() => {
    if (from === '...') {
      setValue(options[0].value)
    } else {
      setValue(options[1].value)
    }
  }, [from])

  return (
    <AdminForm.Control
      type="SELECT"
      label={{ text: 'Продукты', size: 'big' }}
      name="food"
      value={value}
      onChange={setValue}
      options={options}
      error={error}
      className="col col-4"
    />
  )
}
