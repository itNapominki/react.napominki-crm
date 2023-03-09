import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

export default function Food({ initial, errors }) {
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

  const [food, setFood] = React.useState(options[0])
  const error = useErrors(errors, 'food')

  React.useEffect(() => {
    if (from === '...') {
      setFood(options[0])
    } else {
      setFood(options[1])
    }
  }, [from])

  React.useEffect(() => {
    if (initial) {
      setFood({ text: initial, value: initial })
    }
  }, [initial])

  return (
    <Select
      label="Продукты"
      bigLabel
      name="food"
      value={food}
      options={options}
      className="col col-4"
      error={error}
    />
  )
}
