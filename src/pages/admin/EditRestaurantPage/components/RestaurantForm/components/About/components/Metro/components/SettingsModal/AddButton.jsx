import styles from './SettingsModal.module.scss'
import React from 'react'
import { ROUTES } from 'router/routes'

export default function AddButton() {
  return (
    <a
      className={styles.addButton}
      href={ROUTES.ADMIN_CREATE_OBJECT.PATH}
      target="_blank"
    >
      Добавить нувую станцию
    </a>
  )
}
