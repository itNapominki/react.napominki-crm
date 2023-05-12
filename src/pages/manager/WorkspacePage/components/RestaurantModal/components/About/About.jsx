import styles from './About.module.scss'
import React from 'react'

import { Separator } from 'components'
import Comment from './Comment'
import List from './List'

import { ManagerRestaurantContext } from 'context'

export default function About() {
  const {
    data: {
      clientInfo: { info, disabilityInfo, comment },
    },
  } = React.useContext(ManagerRestaurantContext)

  const show = info || disabilityInfo || comment.length > 0

  if (!show) {
    return
  }

  return (
    <React.Fragment>
      <Separator />

      <div className={styles.title}>О филиале</div>

      {info && <List list={info} />}

      {comment.length > 0 && <Comment text={comment} />}

      {disabilityInfo && (
        <React.Fragment>
          <Separator />
          <div className={styles.title}>
            Информация для людей с ограниченными возможностями
          </div>
          <List list={disabilityInfo} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
