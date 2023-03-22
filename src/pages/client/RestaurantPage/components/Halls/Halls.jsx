import styles from './Halls.module.scss'
import React from 'react'

import { Separator, Tabs } from 'components/general'
import { Hall } from './'
import { Offer } from '../'

import { ClientRestaurantContext } from 'core/context'

export default function Halls() {
  const {
    restaurant: { halls },
    decrypted,
  } = React.useContext(ClientRestaurantContext)

  const shown = decrypted
    ? halls.filter((_, i) => decrypted.halls.indexOf(i) !== -1)
    : halls

  const TABS = shown.map((hall) => {
    return {
      text: hall.title,
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.title}>Поминальные залы</div>
      <Separator />
      <Tabs buttons={TABS}>
        {shown.map((hall, i) => (
          <Hall key={i} data={hall} />
        ))}
      </Tabs>
      <Offer
        card={false}
        title="Чтобы выбрать этот зал, напишите своему менеджеру"
      />
    </div>
  )
}
