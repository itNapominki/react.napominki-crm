import './Station.scss'
import React from 'react'
import { Input } from 'components'
import { useErrors } from 'core/hooks'

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
    <div className="admin-form-metro-station">
      <div className="admin-form-metro-station__row">
        <Input
          value={station.title}
          className="admin-form-metro-station__name"
          error={titleError}
          errorDown
        />
        <Input
          value={station.distance}
          disabled
          className="admin-form-metro-station__distance"
          error={distanceError}
          errorDown
        />
      </div>
    </div>
  )
}
