import styles from './Droplist.module.scss'
import React from 'react'

import { classNames } from 'core/utils'
import { useDroplist } from './hooks'

export default function Droplist({
  items = [],
  className,
  visible,
  setVisible,
  closeOnChange = true,
  selected = [],
}) {
  console.log('render Droplist')

  const droplistRef = React.useRef()
  useDroplist({ visible, setVisible, closeOnChange, droplistRef })

  return (
    <div
      ref={droplistRef}
      className={classNames(styles.container, [
        className,
        visible && '_visible',
      ])}
    >
      {items &&
        items.map(({ id, text, color, onClick }, i) => (
          <div
            key={id || i}
            className={classNames(styles.item, [
              color && '_' + color,
              selected.indexOf(i) !== -1 && '_selected',
            ])}
            onClick={onClick}
          >
            {text}
          </div>
        ))}
    </div>
  )
}
