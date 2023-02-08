import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: '1', value: '1' },
  { text: '2', value: '2' },
  { text: '3', value: '3' },
  { text: '4', value: '4' },
  { text: '5', value: '5' },
]

export default function Priority(data) {
  const { initial, setData, errors } = data

  const [priority, setPriority] = React.useState(options[0])
  const error = useErrors(errors, 'priority')

  React.useEffect(() => {
    if (initial) {
      setPriority({ text: initial.toString(), value: initial.toString() })
    }
  }, [initial])

  function handleChange(value) {
    setData((prev) => {
      return {
        ...prev,
        priority: parseInt(value),
      }
    })
  }

  return (
    <Select
      label="Приоритет загрузки"
      bigLabel
      value={priority}
      options={options}
      onChange={({ value }) => handleChange(value)}
      className="col col-4"
      error={error}
    />
  )
}
