import './Droplist.scss'
import React from 'react'
import { classNames } from 'core/utils'

export default function Droplist({ items = [], className, visible, params }) {
  // console.log('render Droplist')

  return (
    <div
      className={classNames('droplist', [className, visible ? 'visible' : ''])}
      {...params}
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
