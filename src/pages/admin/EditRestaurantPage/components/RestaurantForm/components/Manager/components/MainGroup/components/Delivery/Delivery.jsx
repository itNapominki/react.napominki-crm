import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: 'Да', value: 'Да' },
  { text: 'Нет', value: 'Нет' },
]

export default function Delivery({ initial, setData, errors }) {
  const [delivery, setDelivery] = React.useState(options[0])
  const error = useErrors(errors, 'delivery')

  React.useEffect(
    () => setDelivery({ text: initial, value: initial }),
    [initial]
  )

  function handleChange(value) {
    setData((prev) => {
      return {
        ...prev,
        delivery: value,
      }
    })
  }

  return (
    <Select
      label="Доставка"
      bigLabel
      value={delivery}
      options={options}
      onChange={({ value }) => handleChange(value)}
      className="col col-4"
      error={error}
    />
  )
}
