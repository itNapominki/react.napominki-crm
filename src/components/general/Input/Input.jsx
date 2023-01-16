import React from 'react'
import InputMask from 'react-input-mask'
import { useInput } from '../../../hooks'
import { classNames } from '../../../utils'

export default React.memo(function Input(data) {
  const {
    action = null,
    className,
    label = null,
    bigLabel,
    mask,
    onInput,
    type = 'text',
    value: defaultValue = '',
  } = data

  const [value, setValue] = useInput(defaultValue, onInput)

  function handleInput(e) {
    setValue(e.target.value)
  }

  return (
    <label className={classNames('input', [className])}>
      {label && (
        <div
          className={classNames('input__label', [
            bigLabel ? 'input__label_big' : '',
          ])}
        >
          {label}
        </div>
      )}
      <input
        type={type}
        className="input__fluid"
        value={value}
        onInput={handleInput}
      />
      {action && (
        <div className="input__action" onClick={action.onClick}>
          {action.text}
        </div>
      )}
    </label>
  )
})
