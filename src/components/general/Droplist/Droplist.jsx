import styles from './Droplist.module.scss'
import React from 'react'
import { classNames } from 'core/utils'

export default function Droplist({ items = [], className, visible }) {
  // console.log('render Droplist')

  return (
    <div
      className={classNames(styles.droplist, [className, visible && 'visible'])}
    >
      {items &&
        items.map(({ id, text, color, onClick }) => (
          <div
            key={id}
            className={classNames(styles.droplist__item, [color])}
            onClick={onClick}
          >
            {text}
          </div>
        ))}
    </div>
  )
}
