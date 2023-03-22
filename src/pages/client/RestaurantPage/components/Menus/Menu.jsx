import styles from './Menus.module.scss'
import React from 'react'

export default function Menu({ data }) {
  return (
    <div className={styles.menu}>
      <img src="/menu-pdf.svg" alt="" />
      <div className={styles.menu__title}>{data.title}</div>
      <a
        href={process.env.REACT_APP_SERVER_URL + data.path}
        className={styles.menu__link}
        target="_blank"
      >
        Скачать меню
      </a>
    </div>
  )
}
