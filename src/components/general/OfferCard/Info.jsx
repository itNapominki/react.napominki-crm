import styles from './OfferCard.module.scss'
import React from 'react'

import { Separator } from 'components/general'
import { Feature } from './'

import iconCafe from 'assets/sprites/cafe.svg'
import iconMarker from 'assets/sprites/marker.svg'
import iconMetro from 'assets/sprites/metro.svg'

export default function Info({ data }) {
  const {
    address,
    cardTitle,
    title,
    clientInfo: { relatedMetro },
  } = data

  const metro = relatedMetro
    ?.map(({ title, distance }) =>
      [title, distance.replace('0 км. ', '')].join(' ')
    )
    .join(', ')

  return (
    <React.Fragment>
      <div className={styles.title}>{cardTitle}</div>
      <Separator />

      <Feature icon={[iconCafe, 42]} text={title} />
      <Feature icon={[iconMarker, 38]} text={address} />
      {metro && <Feature icon={[iconMetro, 50]} text={metro} />}

      <Separator />
    </React.Fragment>
  )
}
