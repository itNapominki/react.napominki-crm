import React from 'react'
import { Select } from 'components'
import { useErrors } from 'core/hooks'

const options = [
  { text: 'Переводим', value: 'Переводим' },
  { text: 'Не переводим', value: 'Не переводим' },
]

export default function Prepay(data) {
  const { initial, setData, errors } = data

  const [prepay, setPrepay] = React.useState(options[0])
  const error = useErrors(errors, 'prepay')

  React.useEffect(() => setPrepay({ text: initial, value: initial }), [initial])

  function handleChange(value) {
    setData((prev) => {
      return {
        ...prev,
        prepay: value,
      }
    })
  }

  return (
    <Select
      label="Предоплаты"
      bigLabel
      value={prepay}
      options={options}
      onChange={({ value }) => handleChange(value)}
      className="col col-4"
      error={error}
    />
  )
}
