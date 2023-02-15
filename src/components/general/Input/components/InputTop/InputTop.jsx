import React from 'react'
import { classNames } from 'core/utils'

export default function InputTop(data) {
  const { label, bigLabel, error, errorDown } = data
  const hasTop = label || (error && !errorDown) ? true : false

  return (
    hasTop && (
      <div className="input__top">
        <div className="input__top-row">
          {label && (
            <div
              className={classNames('input__label', [
                bigLabel ? 'input__label_big' : '',
              ])}
            >
              {label}
            </div>
          )}
          {error && !errorDown && <div className="input__error">{error}</div>}
        </div>
      </div>
    )
  )
}
