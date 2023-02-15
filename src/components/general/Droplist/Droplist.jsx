import './Droplist.scss'
import React from 'react'
import { classNames } from 'core/utils'

export default function Droplist(data) {
  // console.log('render Droplist')

  const { items = [], className, visible } = data

  return (
    <div
      className={classNames('droplist', [className, visible ? 'visible' : ''])}
    >
      {items.map((item, i) => {
        return (
          <div
            key={i}
            className={classNames('droplist__item', [
              item.color ? 'droplist__item_' + item.color : '',
            ])}
            onClick={item.onClick}
          >
            {item.text}
          </div>
        )
      })}
    </div>
  )
}
