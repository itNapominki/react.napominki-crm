import React from 'react'
import { classNames } from 'core/utils'

export default function SelectTop(data) {
  const { label, bigLabel, error, errorDown } = data
  const hasTop = label || (error && !errorDown) ? true : false

  return (
    hasTop && (
      <div className="select__top">
        <div className="select__top-row">
          {label && (
            <div
              className={classNames('select__label', [
                bigLabel ? 'select__label_big' : '',
              ])}
            >
              {label}
            </div>
          )}
          {error && !errorDown && <div className="select__error">{error}</div>}
        </div>
      </div>
    )
  )
}
