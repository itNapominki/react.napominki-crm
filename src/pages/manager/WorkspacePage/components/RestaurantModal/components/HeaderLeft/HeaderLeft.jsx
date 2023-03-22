import styles from './HeaderLeft.module.scss'
import React from 'react'

export default function HeaderLeft({ added, onAdd, onUpdate, onDelete }) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => (added ? onUpdate() : onAdd())}
      >
        {added ? 'Обновить' : 'Добавить к предложению'}
      </button>
      {added && (
        <button className={styles.button} onClick={() => onDelete()}>
          Убрать из предложения
        </button>
      )}
    </div>
  )
}
