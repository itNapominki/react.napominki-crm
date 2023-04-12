import styles from './Menus.module.scss'
import React from 'react'

import { AddButton } from 'components'

export default function Menu({ menu, onAddClick }) {
  const { added, title, path, deposit, persons } = menu

  return (
    <div className={styles.menu}>
      <img src="/menu-pdf.svg" alt="" />
      <a
        href={process.env.REACT_APP_SERVER_URL + path}
        className={styles.menu__title}
        target="_blank"
      >
        {title}
      </a>
      <div className={styles.menu__info}>
        <span>от {deposit} руб.</span>
        <span>от {persons} человек</span>
      </div>
      <AddButton
        className={styles.addButton}
        onClick={onAddClick}
        added={added}
        text={(added ? 'Добавлено' : 'Добавить') + ' к предложению'}
      />
    </div>
  )
}
