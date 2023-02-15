import './Metro.scss'

import React from 'react'
import { Separator } from 'components'
import { api } from 'core/utils'
import { Station } from './components'
import { useRelated } from './hooks'

export default function Metro({ related, onChange }) {
  const { data } = api.getAll({
    model: api.model.object,
    params: {
      type: 'metro',
    },
    value: [],
  })

  const stations = useRelated(data, related)

  return (
    <div className="admin-modal-metro">
      {related.length > 0 && (
        <React.Fragment>
          <Separator />
          <div className="admin-modal-metro__group">
            <div className="admin-modal-metro__group-title">
              Связанные станции
            </div>
            {related.map((station) => (
              <React.Fragment key={station.id}>
                <Station station={station} onChange={onChange} />
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      )}

      {stations && (
        <React.Fragment>
          <Separator />
          <div className="admin-modal-metro__group">
            <div className="admin-modal-metro__group-title">Все станции</div>
            {stations.map((station) => {
              return (
                <React.Fragment key={station.id}>
                  <Station station={station} onChange={onChange} />
                  <Separator />
                </React.Fragment>
              )
            })}
          </div>
        </React.Fragment>
      )}
    </div>
  )
}
