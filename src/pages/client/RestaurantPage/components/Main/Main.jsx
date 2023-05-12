import styles from './Main.module.scss'
import React from 'react'

import { Features, Info, Shedule } from './'

import { ClientRestaurantContext } from 'context'

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
      {shedule && <Shedule shedule={shedule} />}
      <Info title="О филиале" list={info} comment={comment} shedule={shedule} />
      <Info
        title="Информация для людей с ограниченными возможностями"
        list={disabilityInfo}
      />
    </div>
  )
}
