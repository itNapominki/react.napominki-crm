import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: 'Переводим', value: 'Переводим' },
  { text: 'Не переводим', value: 'Не переводим' },
]

export default function Prepay(data) {
  const { initial, errors } = data

  const [value, setValue] = React.useState(options[0])
  const error = useErrors(errors, 'prepay')

  React.useEffect(() => {
    if (initial) {
      setValue(options.find(({ value }) => value === initial))
    }
  }, [initial])

  return (
    <Select
      label="Предоплаты"
      bigLabel
      name="prepay"
      value={value}
      options={options}
      className="col col-4"
      error={error}
    />
  )
}
