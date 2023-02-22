import styles from './SheduleItem.module.scss'

import React from 'react'
import { DottedButton, Droplist, Input, Select } from 'components/general'
import { useErrors } from 'hooks'

import options from './options'

export default function SheduleItem({
  onInput,
  onRemove,
  onSelectChange,
  errors,
  item,
}) {
  const [droplistVisible, setDroplistVisible] = React.useState(false)

  const selectError = useErrors(errors.array, `[${errors.param}].days`)
  const inputError = useErrors(errors.array, `[${errors.param}].time`)

  return (
    <React.Fragment>
      <div className={styles.row}>
        <DottedButton
          className={styles.burgerButton}
          onClick={() => setDroplistVisible(!droplistVisible)}
        />
        <Droplist
          visible={droplistVisible}
          className={styles.droplist}
          items={[
            {
              text: 'Удалить',
              color: 'red',
              onClick: onRemove,
            },
          ]}
        />
        <Select
          multiple
          label="Дни недели"
          value={item.days}
          options={options}
          onChange={onSelectChange}
          className={styles.select}
          error={selectError}
          errorDown
        />
        <Input
          label="Время"
          value={item.time}
          onInput={onInput}
          className={styles.input}
          error={inputError}
          errorDown
          mask={['99:99 - 99:99']}
        />
      </div>
    </React.Fragment>
  )
}
