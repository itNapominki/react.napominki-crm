import React from 'react'
import { ClientCard, Separator, Tabs } from 'components'
import { RestaurantContext } from 'context'
import { Hall } from './components'
import { Offer } from '..'

import styles from './Halls.module.scss'

export default function Halls() {
  const context = React.useContext(RestaurantContext)
  const { halls } = context

  const [activeTab, setActiveTab] = React.useState(0)

  const TABS = halls.map((hall) => {
    return {
      text: hall.title,
      onClick: setActiveTab,
    }
  })

  return (
    <ClientCard>
      <div className={styles.title}>Поминальные залы</div>
      <Separator />
      <Tabs buttons={TABS}>
        <Hall hall={halls[activeTab]} />
      </Tabs>
      <Offer title="Чтобы выбрать этот зал, напишите своему менеджеру" />
    </ClientCard>
  )
}
