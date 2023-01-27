import React from 'react'

export default function SelectBottom(data) {
  const { action, error, errorDown } = data
  const hasBottom = action || (error && errorDown) ? true : false

  return (
    hasBottom && (
      <div className="select__bottom">
        <div className="select__bottom-row">
          {action && (
            <div className="select__action" onClick={action.onClick}>
              {action.text}
            </div>
          )}
          {error && errorDown && <div className="select__error">{error}</div>}
        </div>
      </div>
    )
  )
}
