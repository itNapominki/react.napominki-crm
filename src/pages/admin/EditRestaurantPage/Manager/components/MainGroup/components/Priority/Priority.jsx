import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: '1', value: 1 },
  { text: '2', value: 2 },
  { text: '3', value: 3 },
  { text: '4', value: 4 },
  { text: '5', value: 5 },
]

export default function Priority(data) {
  const { initial, errors } = data

  const [value, setValue] = React.useState(options[0])
  const error = useErrors(errors, 'priority')

  React.useEffect(() => {
    if (initial) {
      setValue(options.find(({ value }) => value === initial))
    }
  }, [initial])

  return (
    <Select
      label="Приоритет загрузки"
      bigLabel
      name="priority"
      value={value}
      options={options}
      className="col col-4"
      error={error}
    />
  )
}
