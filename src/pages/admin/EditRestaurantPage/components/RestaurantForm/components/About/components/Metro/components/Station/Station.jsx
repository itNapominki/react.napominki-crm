import styles from './Station.module.scss'
import React from 'react'
import { Input } from 'components'
import { useErrors } from 'hooks'

export default function Station(data) {
  const { station, errors, i } = data

  const distanceError = useErrors(
    errors,
    'clientInfo.relatedMetro[' + i + '].distance'
  )

  const titleError = useErrors(
    errors,
    'clientInfo.relatedMetro[' + i + '].title'
  )

  return (
    <div className={styles.row}>
      <Input
        value={station.title}
        className={styles.inputName}
        error={titleError}
        errorDown
      />
      <Input
        value={station.distance}
        disabled
        error={distanceError}
        errorDown
      />
    </div>
  )
}
