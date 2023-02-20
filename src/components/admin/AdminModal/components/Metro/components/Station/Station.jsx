import React from 'react'
import { HandySvg } from 'handy-svg'
import { Input } from 'components'
import { handleAdd, handleInput, handleRemove } from './hooks'
import metroIcon from 'assets/sprites/metro.svg'
import removeIcon from 'assets/sprites/remove.svg'

export default function Station(data) {
  const { station, onChange } = data

  return (
    <div className="admin-modal-metro__station">
      <div className="admin-modal-metro__station-row">
        <div className="admin-modal-metro__station-icon">
          <HandySvg src={metroIcon} />
        </div>
        <div className="admin-modal-metro__station-name">{station.title}</div>
        {station.distance != undefined ? (
          <div className="admin-modal-metro__station-related">
            <Input
              value={station.distance}
              mask={['9 км. 999 м.']}
              onInput={(value) => handleInput(onChange, station.id, value)}
            />
            <div
              className="admin-modal-metro__station-remove"
              onClick={() => handleRemove(onChange, station.id)}
            >
              <HandySvg src={removeIcon} />
            </div>
          </div>
        ) : (
          <div
            className="admin-modal-metro__station-button"
            onClick={() => handleAdd(onChange, station)}
          >
            Добавить
          </div>
        )}
      </div>
    </div>
  )
}
