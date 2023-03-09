import React from 'react'
import { Select } from 'components'
import { useErrors } from 'hooks'

const options = [
  { text: 'Да', value: 'Да' },
  { text: 'Нет', value: 'Нет' },
]

export default function Delivery({ initial, errors }) {
  const [value, setValue] = React.useState(options[0])
  const error = useErrors(errors, 'delivery')

  React.useEffect(() => {
    if (initial) {
      setValue(options.find(({ value }) => value === initial))
    }
  }, [initial])

  return (
    <Select
      label="Доставка"
      bigLabel
      name="delivery"
      value={value}
      options={options}
      className="col col-4"
      error={error}
    />
  )
}
