import './Station.scss'

import React from 'react'
import { Input } from 'components'

export default function Station(data) {
  const { station } = data

  return (
    <div className="admin-form-metro-station">
      <div className="admin-form-metro-station__row">
        <Input
          value={station.title}
          className="admin-form-metro-station__name"
        />
        <Input
          value={station.distance}
          className="admin-form-metro-station__distance"
        />
      </div>
    </div>
  )
}
