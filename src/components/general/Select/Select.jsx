import './Select.scss'
import React from 'react'
import { classNames } from 'core/utils'
import { SelectBottom, SelectFluid, SelectTop } from './components'

export default React.memo(function Select(data) {
  console.log('render Select')

  const {
    action,
    className,
    label,
    bigLabel,
    error,
    errorDown,
    multiple,
    onChange,
    options,
    value,
    name,
  } = data

  return (
    <div className={classNames('select', [className])}>
      <SelectTop
        label={label}
        bigLabel={bigLabel}
        error={error}
        errorDown={errorDown}
      />
      <SelectFluid
        multiple={multiple}
        onChange={onChange}
        options={options}
        value={value}
        name={name}
      />
      <SelectBottom action={action} error={error} errorDown={errorDown} />
    </div>
  )
})
