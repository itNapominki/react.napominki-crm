import styles from './OfferCard.module.scss'
import React from 'react'
import { classNames } from 'utils'

import { Actions, Info, List, Preview, Sort } from './'

import { ROUTES } from 'router/routes'

export default function OfferCard({ className, hall, mode = 'CLIENT' }) {
  const { id, preview, ...data } = hall

  const cardUrl =
    mode === 'CLIENT'
      ? [
          ROUTES.OFFER.CHILDREN.RESTAURANT.PATH.replace(':id', hall.id),
          hall.queryParams,
        ].join('?')
      : null

  return (
    <div className={classNames(styles.container, [className])}>
      <div className={styles.row}>
        <Preview path={preview} cardUrl={cardUrl} />
        <div className={styles.info}>
          <Info data={data} cardUrl={cardUrl} />
          {mode === 'CLIENT' && <List data={data} />}
          <Actions id={id} mode={mode} cardUrl={cardUrl} />
        </div>
      </div>

      {mode === 'MANAGER' && <Sort id={id} />}
    </div>
  )
}
