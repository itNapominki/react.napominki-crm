import './Textarea.scss'
import React from 'react'
import { useInput } from 'hooks'
import { classNames } from 'utils'

export default function Textarea(data) {
  const {
    action = null,
    className,
    label = null,
    bigLabel,
    value: defaultValue = '',
    onInput,
  } = data

  const [value, setValue] = useInput(defaultValue, onInput)

  function handleInput(e) {
    setValue(e.target.value)
  }

  return (
    <label className={classNames('textarea', [className])}>
      {label && (
        <div
          className={classNames('textarea__label', [
            bigLabel ? 'textarea__label_big' : '',
          ])}
        >
          {label}
        </div>
      )}
      <textarea
        className="textarea__fluid"
        value={value}
        onInput={handleInput}
      />
      {action && (
        <div className="textarea__action" onClick={action.onClick}>
          {action.text}
        </div>
      )}
    </label>
  )
}
