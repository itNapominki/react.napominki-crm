import React from 'react'
import { AdminForm } from 'components'
import { handleAdd } from './utils'
import { SheduleItem } from './components'

export default function Shedule(data) {
  const {
    buttonText = 'Добавить расписание',
    onChange,
    title,
    errors,
    formName,
  } = data

  const [list, setList] = React.useState([])

  React.useEffect(() => onChange(list), [list])

  return (
    <AdminForm.Group
      title={title}
      button={{ text: buttonText, onClick: () => handleAdd(setList) }}
    >
      {list?.map((_, i) => (
        <div key={i} className="col col-4">
          <SheduleItem
            i={i}
            list={list}
            setList={setList}
            errors={errors}
            formName={formName}
          />
        </div>
      ))}
    </AdminForm.Group>
  )
}
