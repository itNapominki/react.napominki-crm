import styles from './Droplist.module.scss'
import React from 'react'

import { classNames } from 'utils'

export default function DroplistItem({
  item,
  setVisible,
  closeOnItemClick,
  selected,
}) {
  const { Component, onClick, closeOnClick = closeOnItemClick } = item

  const itemRef = React.useRef()

  if (Component) {
    return <div onClick={handleClick}>{Component}</div>
  }

  const { text, color } = item

  return (
    <div
      ref={itemRef}
      className={classNames(styles.item, [
        color && '_' + color,
        selected && '_selected',
      ])}
      onClick={handleClick}
    >
      {text}
    </div>
  )

  function handleClick() {
    if (onClick) {
      onClick()
    }

    if (closeOnClick) {
      setVisible(false)
    }
  }
}
