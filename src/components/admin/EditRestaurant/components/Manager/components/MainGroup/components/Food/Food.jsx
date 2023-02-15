import React from 'react'
import { Select } from 'components'
import { useErrors } from 'core/hooks'

export default function Food(data) {
  const { initial, setData, errors } = data

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

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        food: food.value,
      }
    })
  }, [food])

  return (
    <Select
      label="Продукты"
      bigLabel
      value={food}
      options={options}
      onChange={setFood}
      className="col col-4"
      error={error}
    />
  )
}
