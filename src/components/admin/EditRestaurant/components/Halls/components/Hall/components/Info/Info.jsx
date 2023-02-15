import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'

export default function Info(data) {
  const { halls, setHalls, i } = data

  const context = React.useContext(EditRestaurantContext)
  const { errors } = context

  const initialState = halls[i].info

  function handleChange(info) {
    setHalls((prev) =>
      prev.map((hall, index) => {
        if (index === i && JSON.stringify(hall.info) != JSON.stringify(info)) {
          hall.info = info
        }

        return hall
      })
    )
  }

  return (
    <AdminForm.Inputlist
      title="Информация"
      buttonText="Добавить информацию"
      onChange={(arr) => handleChange(arr)}
      formName={`halls[${i}].info`}
      errors={errors}
      initialState={initialState}
    />
  )
}
