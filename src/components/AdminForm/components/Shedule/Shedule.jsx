import styles from './Shedule.module.scss'
import React from 'react'

import { AdminForm } from 'components'
import {
  handleAdd,
  handleInput,
  handleRemove,
  handleSelectChange,
} from './handlers'
import { SheduleDroplist, SheduleInput, SheduleSelect } from './'

export default function Shedule({
  buttonText = 'Добавить расписание',
  title,
  errors,
  shedule,
  setShedule,
  name,
}) {
  console.log('Render Shedule')

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setShedule) }}
    >
      {shedule?.map((value, i) => (
        <div key={i} className="col col-4">
          <div className={styles.row}>
            <SheduleDroplist onRemove={() => handleRemove(setShedule, i)} />
            <SheduleSelect
              name={`${name}[${i}]`}
              days={value.days}
              errors={errors}
              onChange={(array) => handleSelectChange(setShedule, array, i)}
            />
            <SheduleInput
              name={`${name}[${i}]`}
              time={value.time}
              errors={errors}
              onInput={(value) => handleInput(setShedule, value, i)}
            />
          </div>
        </div>
      ))}
    </AdminForm.Group>
  )
}
