import styles from './ManagerMap.module.scss'
import React from 'react'
import { YMaps, Map as MapFrame, Placemark } from 'react-yandex-maps'
import { api } from 'core/utils'

export default function ManagerMap() {
  const { data } = api.getAll({
    model: api.model.restaurant,
    params: {
      attributes: ['address', 'id'],
    },
  })

  console.log(data)
  return (
    <div className={styles.container}>
      <YMaps>
        <MapFrame
          defaultState={{ center: [0, 0], zoom: 16 }}
          width="initial"
          height="initial"
          className={styles.frame}
        >
          <Placemark
            geometry={[0, 0]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: '/marker-cafe.svg',
              iconImageSize: [46, 60],
              iconImageOffset: [-20, -60],
            }}
          />
        </MapFrame>
      </YMaps>
    </div>
  )
}
