import styles from './Metro.module.scss'
import React from 'react'
import { Input } from 'components'
import { useErrors } from 'hooks'

export default function Station({ station, errors, name }) {
  const distanceError = useErrors(errors, name + '.distance')
  const titleError = useErrors(errors, name + '.title')

  return (
    <div className={styles.row}>
      <Input
        name={name + '.title'}
        value={station.title}
        className={styles.inputName}
        error={titleError}
        disabled
        errorDown
      />
      <Input
        name={name + '.distance'}
        value={station.distance}
        error={distanceError}
        disabled
        errorDown
      />
    </div>
  )
}
