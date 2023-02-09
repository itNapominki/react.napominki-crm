import React from 'react'
import { RestaurantContext } from 'context'
import { List, Separator } from 'components'

import styles from './About.module.scss'

export default function About() {
  const context = React.useContext(RestaurantContext)

  const { clientInfo } = context
  const { info, comment, disabilityInfo } = clientInfo

  return (
    <React.Fragment>
      {(info.length > 0 || comment) && (
        <React.Fragment>
          <Separator />
          <div className={styles.title}>О филиале</div>
          {info.length > 0 && <List className={styles.list} list={info} />}
          {comment && <p>{comment}</p>}
        </React.Fragment>
      )}

      {disabilityInfo.length > 0 && (
        <React.Fragment>
          <Separator />
          <div className={styles.title}>
            Информация для людей с ограниченными возможностями
          </div>
          {disabilityInfo.length > 0 && (
            <List className={styles.list} list={disabilityInfo} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
