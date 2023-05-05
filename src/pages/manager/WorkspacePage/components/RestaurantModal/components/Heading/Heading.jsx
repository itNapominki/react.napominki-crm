import styles from './Heading.module.scss'
import React from 'react'

import { Features } from './'

import { ManagerRestaurantContext } from 'core/context'

export default function Heading() {
  const {
    data: {
      address,
      point,
      title,
      cardTitle,
      clientInfo: { relatedMetro },
    },
  } = React.useContext(ManagerRestaurantContext)

  // const [relatedMetro, setRelatedMetro] = React.useState([])

  // React.useEffect(() => {
  //   ymaps
  //     .geocode(point.coordinates, {
  //       kind: 'metro',
  //       results: 5,
  //       json: true,
  //     })
  //     .then(function (res) {
  //       res.GeoObjectCollection.featureMember.map(async ({ GeoObject }) => {
  //         const coordiates = GeoObject.Point.pos
  //           .split(' ')
  //           .map((string) => +string)
  //           .reverse()

  //         let multiRoute = new ymaps.multiRouter.MultiRoute(
  //           {
  //             referencePoints: [coordiates, point.coordinates],
  //             params: {
  //               results: 1,
  //             },
  //           },
  //           {
  //             boundsAutoApply: true,
  //           }
  //         )

  //         multiRoute.getRoutes().each((e) => console.log(e, '12'))

  //         await multiRoute.model.events.add('requestsuccess', function () {
  //           const activeRoute = multiRoute.getActiveRoute()
  //           const distance = activeRoute.properties.get('distance').text

  //           setRelatedMetro((prev) => [
  //             ...prev,
  //             { title: GeoObject.name, distance },
  //           ])
  //         })
  //       })
  //     })
  // }, [])

  return (
    <React.Fragment>
      <div className={styles.title}>{cardTitle}</div>
      <Features address={address} title={title} relatedMetro={relatedMetro} />
    </React.Fragment>
  )
}
