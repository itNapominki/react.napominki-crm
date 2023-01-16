import React from 'react'
import { HandySvg } from 'handy-svg'
import { Button } from 'components'
import closeIcon from 'sprites/close.svg'

import AlertLayout from '../AlertLayout'

export default function Confirm(data) {
  const { title = 'Подтвердите действие', success, cancel } = data

  return (
    <AlertLayout>
      <div className="confirm">
        <div className="confirm__close">
          <HandySvg src={closeIcon} />
        </div>
        <div className="confirm__title">{title}</div>
        <div className="confirm__actions">
          <Button
            text={success.text ? success.text : 'Ок'}
            className="confirm__button"
          />
          <Button
            mode="light"
            text={cancel.text ? cancel.text : 'Отмена'}
            className="confirm__button"
          />
        </div>
      </div>
    </AlertLayout>
  )
}
