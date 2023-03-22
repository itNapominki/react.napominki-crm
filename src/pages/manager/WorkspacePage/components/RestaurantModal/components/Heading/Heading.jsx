import styles from './Heading.module.scss'
import React from 'react'

import { Features } from './'

import { ManagerRestaurantContext } from 'core/context'

export default function Heading() {
  const {
    data: {
      address,
      title,
      cardTitle,
      clientInfo: { relatedMetro },
    },
  } = React.useContext(ManagerRestaurantContext)

  return (
    <React.Fragment>
      <div className={styles.title}>{cardTitle}</div>
      <Features address={address} title={title} relatedMetro={relatedMetro} />
    </React.Fragment>
  )
}
