import styles from './Menus.module.scss'
import React from 'react'

export default function Menu({ title, path }) {
  return (
    <div className={styles.menu}>
      <img src="/menu-pdf.svg" alt="" />
      <div className={styles.menu__title}>{title}</div>
      <a
        href={process.env.REACT_APP_SERVER_URL + path}
        className={styles.menu__link}
        target="_blank"
      >
        Открыть меню
      </a>
    </div>
  )
}
