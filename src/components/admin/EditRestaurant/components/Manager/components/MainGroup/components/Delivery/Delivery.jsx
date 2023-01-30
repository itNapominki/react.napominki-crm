import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: 'Да', value: 'Да' },
  { text: 'Нет', value: 'Нет' },
]

export default function Delivery(data) {
  const { initial, setData, errors } = data

  const [delivery, setDelivery] = React.useState(options[0])
  const error = useErrors(errors, 'delivery')

  React.useEffect(() => {
    if (initial != null) {
      setDelivery({ text: initial, value: initial })
    }
  }, [initial])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        delivery: delivery.value,
      }
    })
  }, [delivery])

  return (
    <Select
      label="Доставка"
      bigLabel
      value={delivery}
      options={options}
      onChange={setDelivery}
      className="col col-4"
      error={error}
    />
  )
}
