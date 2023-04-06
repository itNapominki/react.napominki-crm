import React from 'react'
import { HandySvg } from 'handy-svg'
import { Droplist } from 'components'
import { useMultiple, useSelect } from '../../hooks'
import { getValue } from '../../utils'
import chevron from 'assets/sprites/chevron.svg'

export default function SelectFluid({
  multiple,
  onChange,
  options,
  value: defaultValue,
  name,
}) {
  const [value, droplist, visible, setVisible] = multiple
    ? useMultiple(defaultValue, options, onChange)
    : useSelect(defaultValue, options, onChange)

  const selected = multiple
    ? options.map((_, i) => i).filter((i) => value.indexOf(options[i]) !== -1)
    : [options.indexOf(value)]

  return (
    <div className="select__wrap">
      <div
        className="select__fluid"
        onClick={() => setVisible((prev) => !prev)}
      >
        {getValue(multiple, value)}
        <HandySvg src={chevron} className="select__chevron" />
      </div>

      {
        <Droplist
          className="select__droplist"
          visible={visible}
          setVisible={setVisible}
          items={droplist}
          closeOnChange={multiple && false}
          selected={selected}
        />
      }

      {name && (
        <input
          name={name}
          value={
            multiple
              ? JSON.stringify(value.map(({ value }) => value))
              : typeof value.value === 'string'
              ? value.value
              : JSON.stringify(value.value)
          }
          hidden
          readOnly
        />
      )}
    </div>
  )
}
