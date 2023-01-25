import { Separator } from 'components'
import React from 'react'
import { classNames } from 'utils'

export default function Group(data) {
  const { className, button, children, title } = data

  return (
    <React.Fragment>
      <div className={classNames('admin-form__group', [className])}>
        {title && <div className="admin-form__group-title">{title}</div>}
        <div className="admin-form__group-row row">{children}</div>
        {button && (
          <button className="admin-form__group-button" onClick={button.onClick}>
            {button.text}
          </button>
        )}
      </div>
      <Separator />
    </React.Fragment>
  )
}
