import './SheduleItem.scss'

import React from 'react'
import { DottedButton, Droplist, Input, Select } from 'components'
import { useErrors } from 'core/hooks'
import { options } from '../../data'
import { handleInput, handleRemove, handleSelectChange } from '../../utils'

export default function SheduleItem(data) {
  const { i, shedule, setShedule, errors, formName } = data

  const [droplistVisible, setDroplistVisible] = React.useState(false)

  const selectError = useErrors(errors, formName + '[' + i + '].days')
  const inputError = useErrors(errors, formName + '[' + i + '].time')

  return (
    <div className="admin-form-shedule">
      <div className="admin-form-shedule__row">
        <DottedButton
          className="admin-form-shedule__burger"
          onClick={() => setDroplistVisible(!droplistVisible)}
        />
        <Droplist
          visible={droplistVisible}
          className="admin-form-shedule__droplist"
          items={[
            {
              text: 'Удалить',
              color: 'red',
              onClick: () => handleRemove(setShedule, i),
            },
          ]}
        />
        <Select
          multiple
          label="Дни недели"
          value={shedule[i].days}
          options={options}
          onChange={(arr) => handleSelectChange(setShedule, arr, i)}
          className="admin-form-shedule__select"
          error={selectError}
          errorDown
        />
        <Input
          label="Время"
          value={shedule[i].time}
          onInput={(value) => handleInput(setShedule, value, i)}
          className="admin-form-shedule__input"
          error={inputError}
          errorDown
          mask={['99:99 - 99:99']}
        />
      </div>
    </div>
  )
}
