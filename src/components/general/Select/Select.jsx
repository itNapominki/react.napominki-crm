import React from 'react'
import { HandySvg } from 'handy-svg'
import { classNames } from 'utils'
import { useSelect } from 'hooks'
import { Droplist } from 'components'
import chevron from 'sprites/chevron.svg'

export default function Select(data) {
  const {
    className,
    label,
    bigLabel,
    onChange,
    options = [],
    value: defaultValue,
  } = data

  const [droplistVisible, setDroplistVisible] = React.useState(false)
  const [value, setValue] = useSelect({
    defaultValue,
    options,
    callback: onChange,
  })

  function handleChangeOption(value) {
    setValue(value)
  }

  const o = options.map((option) => {
    return {
      ...option,
      onClick: () => {
        handleChangeOption(option)
      },
    }
  })

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
        onClick={() => setDroplistVisible(!droplistVisible)}
      >
        {value.text}
        <HandySvg src={chevron} className="select__chevron" />
        {droplistVisible && <Droplist className="select__droplist" items={o} />}
      </div>
    </div>
  )
}
