import React from 'react'
import { HandySvg } from 'handy-svg'
import { classNames } from 'utils'
import { Droplist } from 'components'
import { useMultiple, useSelect } from './hooks'
import chevron from 'sprites/chevron.svg'

export default function Select(data) {
  console.log('render Select')

  const {
    className,
    label,
    bigLabel,
    multiple,
    onChange,
    options,
    value: defaultValue,
  } = data

  const [droplistVisible, setDroplistVisible] = React.useState(false)
  const [value, droplist] = multiple
    ? useMultiple(defaultValue, options, onChange)
    : useSelect(defaultValue, options, onChange)

  return (
    <div className={classNames('select', [className])}>
      {label && (
        <div
          className={classNames('select__label', [
            bigLabel ? 'select__label_big' : '',
          ])}
        >
          {label}
        </div>
      )}
      <div
        className="select__fluid"
        onClick={() => setDroplistVisible(true)}
        // onClick={() => setDroplistVisible(!droplistVisible)}
      >
        {multiple
          ? value
              ?.map((elem) => (elem.short ? elem.short : elem.text))
              .join(', ')
          : value.text}
        <HandySvg src={chevron} className="select__chevron" />
        {droplistVisible && (
          <Droplist className="select__droplist" items={droplist} />
        )}
      </div>
    </div>
  )
}
