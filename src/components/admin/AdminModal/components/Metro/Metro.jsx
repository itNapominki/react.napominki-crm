import React from 'react'
import { Input, Separator, AdminModal } from 'components'
import { useApi } from 'hooks'
import { api } from 'utils'
import Station from './Station'

export default function Metro(data) {
  const { relatedMetro, setRelatedMetro } = data
  const [stations, setStations] = React.useState([])

  const metro = useApi({
    request: api.objects.metro.getAll,
    callback: () => setStations(metro[0].objects),
  })

  return (
    <AdminModal>
      <div className="admin-modal-metro">
        <Input
          type="search"
          label="Поиск"
          bigLabel
          className="admin-modal-metro__search"
        />

        <Separator />

        {relatedMetro.length > 0 && (
          <React.Fragment>
            <Separator />
            <div className="admin-modal-metro__group">
              <div className="admin-modal-metro__group-title">
                Связанные станции
              </div>
              {relatedMetro.map((station) => (
                <React.Fragment key={station._id}>
                  <Station
                    station={station}
                    related={station}
                    setRelatedMetro={setRelatedMetro}
                  />
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
                const related = relatedMetro.filter(
                  ({ _id }) => _id === station._id
                )[0]

                return (
                  <React.Fragment key={station._id}>
                    <Station
                      related={related}
                      station={station}
                      setRelatedMetro={setRelatedMetro}
                    />
                    <Separator />
                  </React.Fragment>
                )
              })}
            </div>
          </React.Fragment>
        )}
      </div>
    </AdminModal>
  )
}
