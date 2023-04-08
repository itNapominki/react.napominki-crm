import styles from './Select.module.scss'
import React from 'react'

import { Droplist } from 'components'
import { SelectFluid, SelectValue } from './'

import { classNames } from 'core/utils'
import { useMultiple } from './hooks'
import { createDroplist, getSelected } from './utils'

export default React.memo(
  function Select({ multiple = false, name, onChange, options, value }) {
    // console.log('render Select')

    if (!options) {
      return console.error('Нужно добавить options для Select')
    }

    if (!value) {
      return console.error('Нужно добавить value для Select')
    }

    const [droplistVisible, setDroplistVisible] = React.useState(false)
    const handleChooseOption = multiple && useMultiple(value, options, onChange)

    const selected = getSelected(multiple, options, value)
    const droplist = createDroplist(
      options,
      multiple,
      handleChooseOption,
      onChange
    )

    return (
      <div className={classNames(styles.container)}>
        <SelectFluid
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

        {name && <SelectValue name={name} value={value} />}
      </div>
    )
  }
  // (prevProps, nextProps) => prevProps.value === nextProps.value
)
