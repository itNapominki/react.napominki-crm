import styles from './AddButton.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { classNames } from 'utils'

import iconCheck from 'assets/sprites/check.svg'

export default function AddButton({
  added,
  className,
  onClick,
  text = 'Добавить',
}) {
  return (
    <button
      className={classNames(styles.button, [
        className,
        added ? styles.button_added : '',
      ])}
      onClick={onClick}
    >
      <div className={styles.button__icon}>
        <HandySvg src={iconCheck} />
      </div>
      {text}
    </button>
  )
}
