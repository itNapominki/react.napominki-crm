import styles from './Menus.module.scss'
import React from 'react'

import { Menu } from './'

import { ManagerRestaurantContext } from 'core/context'

export default function Menus() {
  const {
    data: { menus },
    menus: added,
    handleAddMenu,
  } = React.useContext(ManagerRestaurantContext)

  return (
    <div className={styles.container}>
      <div className={styles.title}>Поминальное меню</div>

      <div className={styles.row}>
        {menus.map((menu, i) => (
          <Menu
            key={i}
            menu={menu}
            onAddClick={() => handleAddMenu(menu.file.id)}
            added={added.find((id) => id === menu.file.id)}
          />
        ))}
      </div>
    </div>
  )
}
