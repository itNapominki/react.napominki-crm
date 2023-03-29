import styles from './OfferCard.module.scss'
import React from 'react'
import { classNames } from 'core/utils'

import { Actions, Info, List, Preview, Sort } from './'

export default function OfferCard({ className, hall, mode = 'CLIENT' }) {
  const { id, preview, ...data } = hall

  return (
    <div className={classNames(styles.container, [className])}>
      <div className={styles.row}>
        <Preview path={preview} />
        <div className={styles.info}>
          <Info data={data} />
          {mode === 'CLIENT' && <List data={data} />}
          <Actions id={id} mode={mode} />
        </div>
      </div>

      {mode === 'MANAGER' && <Sort id={id} />}
    </div>
  )
}
