import styles from './Halls.module.scss'
import React from 'react'

import { Separator, Tabs } from 'components'
import { Hall } from './'
import { Offer } from '../'

import { ClientRestaurantContext } from 'context'

export default function Halls() {
  const {
    restaurant: { halls },
    manager,
  } = React.useContext(ClientRestaurantContext)

  const TABS = halls.map((hall) => {
    return {
      text: hall.title,
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.title}>Поминальные залы</div>
      <Separator />
      <Tabs buttons={TABS} className={styles.tabs}>
        {halls.map((hall, i) => (
          <Hall key={i} data={hall} />
        ))}
      </Tabs>
      <Offer
        card={false}
        manager={manager}
        title="Чтобы выбрать этот зал, напишите своему менеджеру"
      />
    </div>
  )
}
