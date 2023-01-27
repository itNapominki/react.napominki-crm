import './Metro.scss'

import React from 'react'
import { Separator } from 'components'
import { useFetch } from 'hooks'
import { Station } from './components'
import { useRelated } from './hooks'

export default function Metro(data) {
  const { related, onChange } = data

  const serverData = useFetch('/objects/?type=metro', [])
  const stations = useRelated(serverData, related)

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
