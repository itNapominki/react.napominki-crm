import './DottedButton.scss'
import React from 'react'
import { classNames } from 'core/utils'

export default function DottedButton(data) {
  const { className, ...props } = data

  return (
    <button className={classNames('dotted-button', [className])} {...props}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
