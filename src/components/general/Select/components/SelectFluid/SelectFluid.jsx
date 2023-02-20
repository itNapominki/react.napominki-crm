import React from 'react'
import { HandySvg } from 'handy-svg'
import { Droplist } from 'components'
import { useMultiple, useSelect } from '../../hooks'
import { getValue } from '../../utils'
import chevron from 'assets/sprites/chevron.svg'

export default function SelectFluid(data) {
  const { multiple, onChange, options, value: defaultValue } = data

  const [value, droplist, visible, setVisible] = multiple
    ? useMultiple(defaultValue, options, onChange)
    : useSelect(defaultValue, options, onChange)

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
          items={droplist}
        />
      }
    </div>
  )
}
