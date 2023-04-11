import styles from './Select.module.scss'
import React from 'react'

import { Droplist } from 'components'
import { SelectFluid, SelectSearch, SelectValue } from './'

import { classNames } from 'core/utils'
import { useDroplist, useMultiple } from './hooks'
import { createDroplist, getSelected } from './utils'

export default React.memo(
  function Select({
    multiple = false,
    name,
    onChange,
    options,
    search,
    value,
  }) {
    // console.log('render Select')

    if (!options) {
      return console.error('Нужно добавить options для Select')
    }

    if (value === undefined) {
      return console.error('Нужно добавить value для Select')
    }

    const [opened, setOpened] = React.useState(false)
    const handleChooseOption = multiple && useMultiple(value, options, onChange)

    const selected = getSelected(multiple, options, value, search)

    const handleChange = multiple ? handleChooseOption : onChange

    const droplist = createDroplist(options, handleChange)

    if (search) {
      droplist.unshift({
        Component: (
          <SelectSearch value={search.value} setValue={search.setValue} />
        ),
        closeOnClick: false,
      })
    }

    const selectedOption = options.find((option) => option.value === value)
    const selectedText = multiple
      ? value.join(', ')
      : selectedOption
      ? selectedOption.text
      : value

    return (
      <div className={classNames(styles.container)}>
        <SelectFluid value={selectedText} setOpened={setOpened} />

        <Droplist
          className={styles.droplist}
          visible={opened}
          setVisible={setOpened}
          items={droplist}
          closeOnItemClick={multiple ? false : true}
          selected={selected}
        />

        {name && <SelectValue name={name} value={value} />}
      </div>
    )
  }
  // (prevProps, nextProps) => prevProps.value === nextProps.value
)
