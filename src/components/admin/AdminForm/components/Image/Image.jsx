import './Image.scss'
import React from 'react'
import { Fileinput } from 'components'
import { classNames } from 'core/utils'

export default function Image(data) {
  const { background, className, label, ...props } = data

  return (
    <label className={classNames('admin-form-image', className)}>
      {label && <div className="admin-form-image__label">{label}</div>}
      <div
        className="admin-form-image__fluid"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Fileinput {...props} />
      </div>
    </label>
  )
}
