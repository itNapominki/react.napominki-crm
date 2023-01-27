import React from 'react'

export default function InputBottom(data) {
  const { action, error, errorDown } = data
  const hasBottom = action || (error && errorDown) ? true : false

  return (
    hasBottom && (
      <div className="input__bottom">
        <div className="input__bottom-row">
          {action && (
            <div className="input__action" onClick={action.onClick}>
              {action.text}
            </div>
          )}
          {error && errorDown && <div className="input__error">{error}</div>}
        </div>
      </div>
    )
  )
}
