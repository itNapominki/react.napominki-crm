// import './Input.scss'
import React from 'react'
import { classNames } from 'core/utils'
import { InputBottom, InputFluid, InputTop } from './components'

export default React.memo(
  React.forwardRef(
    (
      {
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
        name,
        placeholder,
        ...props
      },
      ref
    ) => {
      console.log('render Input')

      return (
        <label ref={ref} className={classNames('input', [className])}>
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
            name={name}
            value={value}
            mask={mask}
            placeholder={placeholder}
            {...props}
          />

          <InputBottom action={action} error={error} errorDown={errorDown} />
        </label>
      )
    }
  )
)
