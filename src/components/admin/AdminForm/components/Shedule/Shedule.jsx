import React from 'react'
import { HandySvg } from 'handy-svg'
import { AdminForm, Input } from 'components'
import { SheduleSelect } from './components'
import removeIcon from 'sprites/remove.svg'

export default function Shedule(data) {
  const { buttonText = 'Добавить расписание', title } = data

  const [list, setList] = React.useState([])

  console.log(list)

  function handleAdd() {
    setList((prev) => [...prev, { days: [], time: '' }])
  }

  function handleRemove(i) {
    setList((prev) => prev.filter((elem, index) => index != i))
  }

  function handleSelectChange(arr, i) {
    setList((prev) =>
      prev.map((elem, index) => {
        if (i === index) {
          return {
            ...elem,
            days: arr,
          }
        }
        return elem
      })
    )
  }

  function handleInput(value, i) {
    setList((prev) =>
      prev.map((elem, index) => {
        if (i === index) {
          return {
            ...elem,
            time: value,
          }
        }
        return elem
      })
    )
  }

  return (
    <AdminForm.Group
      title={title}
      className="admin-form__shedule"
      button={{ text: buttonText, onClick: handleAdd }}
    >
      {list?.map((item, i) => (
        <div key={i} className="admin-form__shedule-item col col-4">
          <div
            className="admin-form__shedule-remove"
            onClick={() => handleRemove(i)}
          >
            <HandySvg src={removeIcon} />
          </div>
          <SheduleSelect
            value={list[i].days}
            onChange={(arr) => handleSelectChange(arr, i)}
          />
          <Input
            label="Время"
            value={list[i].time}
            onInput={(value) => handleInput(value, i)}
          />
        </div>
      ))}
    </AdminForm.Group>
  )
}
