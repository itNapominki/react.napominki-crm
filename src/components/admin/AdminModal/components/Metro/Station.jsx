import React from 'react'
import { HandySvg } from 'handy-svg'
import { Input } from '../../../../'
import metroIcon from '../../../../../sprites/metro.svg'
import removeIcon from '../../../../../sprites/remove.svg'
import { useInput } from '../../../../../hooks'

export default function Station(data) {
  const { station, related = false, setRelatedMetro } = data
  const { objectName, _id } = station
  const { distance: d } = related

  const [distance, setDistance] = useInput(() => {
    if (d) {
      let string = d.toString()

      while (string.length < 4) {
        string = 0 + string
      }

      return string
    }
  })

  React.useEffect(() => {
    if (typeof distance === 'string') {
      const string = distance.replace(/[^0-9]/g, '')
      setDistance(string)

      setRelatedMetro((prev) => [
        ...prev.map((station) => {
          if (station._id === _id) {
            return {
              ...station,
              distance: +string,
            }
          }

          return station
        }),
      ])
    }
  }, [distance])

  function handleAdd() {
    setRelatedMetro((prev) => [...prev, { _id, objectName, distance: 0 }])
  }

  function handleRemove() {
    setRelatedMetro((prev) => [...prev.filter((station) => station._id != _id)])
  }

  return (
    <div className="admin-modal-metro__station">
      <div className="admin-modal-metro__station-row">
        <div className="admin-modal-metro__station-icon">
          <HandySvg src={metroIcon} />
        </div>
        <div className="admin-modal-metro__station-name">{objectName}</div>
        {related ? (
          <div className="admin-modal-metro__station-related">
            <Input
              type="text"
              mask="9 км. 999 м."
              value={distance}
              onInput={setDistance}
            />
            <div
              className="admin-modal-metro__station-remove"
              onClick={handleRemove}
            >
              <HandySvg src={removeIcon} />
            </div>
          </div>
        ) : (
          <div
            className="admin-modal-metro__station-button"
            onClick={handleAdd}
          >
            Добавить
          </div>
        )}
      </div>
    </div>
  )
}
