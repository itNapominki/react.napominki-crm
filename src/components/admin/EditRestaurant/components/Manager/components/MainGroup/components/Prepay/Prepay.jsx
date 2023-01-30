import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: 'Переводим', value: 'Переводим' },
  { text: 'Не переводим', value: 'Не переводим' },
]

export default function Prepay(data) {
  const { initial, setData, errors } = data

  const [prepay, setPrepay] = React.useState(options[0])
  const error = useErrors(errors, 'prepay')

  React.useEffect(() => {
    if (initial != null) {
      setPrepay({ text: initial, value: initial })
    }
  }, [initial])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        prepay: prepay.value,
      }
    })
  }, [prepay])

  return (
    <Select
      label="Предоплаты"
      bigLabel
      value={prepay}
      options={options}
      onChange={setPrepay}
      className="col col-4"
      error={error}
    />
  )
}
