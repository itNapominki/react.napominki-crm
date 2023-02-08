import './List.scss'
import React from 'react'
import { classNames } from 'utils'

export default function List(data) {
  const { className, list } = data

  return (
    <ul className={classNames('list', [className])}>
      {list.map((listItem, i) => (
        <li
          key={i}
          className={classNames('list__item', [
            className ? className + '-item' : '',
          ])}
        >
          {listItem}
        </li>
      ))}
    </ul>
  )
}
