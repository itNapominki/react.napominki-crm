import styles from './Main.module.scss'
import React from 'react'

import { Features, Info } from './'

import { ClientRestaurantContext } from 'core/context'

export default function Main() {
  const {
    restaurant: {
      address,
      title,
      cardTitle,
      clientInfo: { relatedMetro, shedule, disabilityInfo, info, comment },
    },
  } = React.useContext(ClientRestaurantContext)

  return (
    <div className={styles.container}>
      <div className={styles.title}>{cardTitle}</div>
      <Features title={title} address={address} relatedMetro={relatedMetro} />
      <Info title="О филиале" list={info} comment={comment} />
      <Info
        title="Информация для людей с ограниченными возможностями"
        list={disabilityInfo}
      />
    </div>
  )
}
