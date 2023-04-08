import styles from './Shedule.module.scss'
import React from 'react'

import { AdminForm } from 'components'

import { useErrors } from 'hooks'

const OPTIONS = [
  { text: 'Понедельник', short: 'Пн', value: 'Пн' },
  { text: 'Вторник', short: 'Вт', value: 'Вт' },
  { text: 'Среда', short: 'Ср', value: 'Ср' },
  { text: 'Четверг', short: 'Чт', value: 'Чт' },
  { text: 'Пятница', short: 'Пт', value: 'Пт' },
  { text: 'Суббота', short: 'Сб', value: 'Сб' },
  { text: 'Воскресенье', short: 'Вс', value: 'Вс' },
]

export default function SheduleSelect({ name, days, errors, onChange }) {
  const error = useErrors(errors, name + '.time')

  return (
    <AdminForm.Control
      type="SELECT"
      multiple={true}
      name={name + '.days'}
      label="Дни недели"
      value={days}
      options={OPTIONS}
      onChange={onChange}
      className={styles.select}
      error={{ text: error, down: true }}
    />
  )
}
