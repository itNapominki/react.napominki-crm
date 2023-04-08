import styles from './Shedule.module.scss'
import React from 'react'

import { AdminForm } from 'components'

import { useErrors } from 'hooks'

export default function SheduleInput({ name, time, errors, onInput }) {
  const error = useErrors(errors, name + '.time')

  return (
    <AdminForm.Control
      type="text"
      label="Время"
      name={name + '.time'}
      value={time}
      onInput={onInput}
      className={styles.input}
      error={{ text: error, down: true }}
      mask={['99:99 - 99:99']}
    />
  )
}
