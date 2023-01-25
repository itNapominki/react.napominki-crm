import React from 'react'
import { Select } from 'components'

const options = [
  { text: 'Понедельник', short: 'Пн' },
  { text: 'Вторник', short: 'Вт' },
  { text: 'Среда', short: 'Ср' },
  { text: 'Четверг', short: 'Чт' },
  { text: 'Пятница', short: 'Пт' },
  { text: 'Суббота', short: 'Сб' },
  { text: 'Воскресенье', short: 'Вс' },
]

export default function SheduleSelect(data) {
  const { onChange, value = [] } = data

  return (
    <Select
      multiple
      label="Дни недели"
      value={value}
      options={options}
      onChange={onChange}
    />
  )
}
