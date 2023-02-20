// import './Input.scss'
import React from 'react'
import { classNames } from 'core/utils'
import { InputBottom, InputFluid, InputTop } from './components'

export default React.memo(function Input({
  action = null,
  className,
  disabled,
  error,
  errorDown,
  label = null,
  bigLabel,
  onInput,
  type,
  value,
  mask,
}) {
  console.log('render Input')

  return (
    <label className={classNames('input', [className])}>
      <InputTop
        label={label}
        bigLabel={bigLabel}
        error={error}
        errorDown={errorDown}
      />

      <InputFluid
        disabled={disabled}
        onInput={onInput}
        type={type}
        value={value}
        mask={mask}
      />

      <InputBottom action={action} error={error} errorDown={errorDown} />
    </label>
  )
})
