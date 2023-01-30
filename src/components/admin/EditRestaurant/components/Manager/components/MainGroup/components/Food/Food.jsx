import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: 'Не возим', value: 'Не возим' },
  { text: 'Возим от', value: 'Возим от' },
]

export default function Food(data) {
  const { initial, setData, errors } = data

  const [food, setFood] = React.useState(options[0])
  const error = useErrors(errors, 'food')

  React.useEffect(() => {
    if (initial != null) {
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
