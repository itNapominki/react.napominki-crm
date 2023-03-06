import styles from './ManagerMap.module.scss'
import React from 'react'
import {
  YMaps,
  Map as MapFrame,
  Placemark,
  ObjectManager,
} from 'react-yandex-maps'
import { api } from 'core/utils'

import axios from 'axios'
import ymaps from 'ymaps'

export default function ManagerMap() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function getData() {
      await axios
        .get(process.env.REACT_APP_SERVER_URL + '/test-yamap')
        .then((res) => console.log(res.data))

      ymaps
        .load()
        .then((maps) => {
          var loadingObjectManager = new maps.LoadingObjectManager(
            process.env.REACT_APP_SERVER_URL + '/test-yamap',
            {
              paddingTemplate: 'callbackFunction_%b',
              clusterize: true,
            }
          )

          console.log(loadingObjectManager)
        })
        .catch((error) => console.log('Failed to load Yandex Maps', error))
    }

    getData()
  }, [])

  return (
    <div style={{ width: '100%', height: '500px', background: 'gray' }}></div>
  )

  return (
    <div className={styles.container}>
      {/* <YMaps>
        <MapFrame
          defaultState={{ center: [55, 35], zoom: 16 }}
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
          <ObjectManager
            options={{
              clusterize: true,
              gridSize: 32,
            }}
            objects={{
              preset: 'islands#greenDotIcon',
            }}
            clusters={{
              preset: 'islands#greenClusterIcons',
            }}
            features={data}
          />
        </MapFrame>
      </YMaps> */}
    </div>
  )
}
