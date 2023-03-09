import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: 'Работаем', value: 'Работаем' },
  { text: 'Не работаем', value: 'Не работаем' },
  { text: 'Работаем по согласованию', value: 'Работаем по согласованию' },
  { text: 'Закрыт', value: 'Закрыт' },
]

export default function Status(data) {
  const { initial, errors } = data

  const [value, setValue] = React.useState(options[0])
  const error = useErrors(errors, 'status')

  React.useEffect(() => {
    if (initial) {
      setValue(options.find(({ value }) => value === initial))
    }
  }, [initial])

  return (
    <Select
      label="Статус"
      bigLabel
      name="status"
      value={value}
      options={options}
      className="col col-4"
      error={error}
    />
  )
}
