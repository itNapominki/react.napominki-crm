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
  const { initial, setData, errors } = data

  const [status, setStatus] = React.useState(options[0])
  const error = useErrors(errors, 'status')

  React.useEffect(() => {
    if (initial != null) {
      setStatus({ text: initial, value: initial })
    }
  }, [initial])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        status: status.value,
      }
    })
  }, [status])

  return (
    <Select
      label="Статус"
      bigLabel
      value={status}
      options={options}
      onChange={setStatus}
      className="col col-4"
      error={error}
    />
  )
}
