import styles from './Halls.module.scss'
import React from 'react'

import { Separator } from 'components/general'
import { Hall } from './components'

import { ManagerRestaurantContext } from 'core/context'

export default function Halls() {
  const {
    data: { halls },
    halls: added,
    handleAddHall,
  } = React.useContext(ManagerRestaurantContext)

  return (
    <div className={styles.container}>
      <div className={styles.title}>Поминальные залы</div>
      <Separator />

      {halls.map((hall, i) => (
        <Hall
          key={i}
          hall={hall}
          added={added.indexOf(i) !== -1}
          onAddClick={() => handleAddHall(i)}
        />
      ))}
    </div>
  )
}
