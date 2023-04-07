import styles from './Select.module.scss'
import React from 'react'

import { Droplist } from 'components'
import { SelectFluid, SelectValue } from '.'

import { classNames } from 'core/utils'

export default React.memo(function Select({
  multiple = false,
  name,
  onChange,
  options,
  value,
}) {
  console.log('render Select')

  const [droplistVisible, setDroplistVisible] = React.useState(false)

  const selected = multiple
    ? options.map((_, i) => i).filter((i) => value.indexOf(options[i]) !== -1)
    : [options.findIndex((option) => option.value === value)]

  const droplist = options.map((option) => {
    return {
      ...option,
      onClick: () => onChange(option.value),
    }
  })

  return (
    <div className={classNames(styles.container)}>
      <SelectFluid
        multiple={multiple}
        name={name}
        onChange={onChange}
        options={options}
        value={value}
        setVisible={setDroplistVisible}
      />

      <Droplist
        className={styles.droplist}
        visible={droplistVisible}
        setVisible={setDroplistVisible}
        items={droplist}
        closeOnChange={multiple && false}
        selected={selected}
      />

      {name && <SelectValue name={name} multiple={multiple} value={value} />}
    </div>
  )
})
