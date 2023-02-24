import React from 'react'
import { AdminForm } from 'components/admin'
import { getChildrenErrors } from 'core/utils'

export default function Info({ info, errors, index, setHalls }) {
  function handleChange(array) {
    setHalls((prev) =>
      prev.map((hall, i) => {
        if (index === i && JSON.stringify(hall.info) != JSON.stringify(array)) {
          hall.info = array
        }

        return hall
      })
    )
  }

  return (
    <AdminForm.Inputlist
      title="Информация"
      buttonText="Добавить информацию"
      onChange={(array) => handleChange(array)}
      errors={getChildrenErrors(errors, 'info', ['[', ']'])}
      initial={info}
    />
  )
}
