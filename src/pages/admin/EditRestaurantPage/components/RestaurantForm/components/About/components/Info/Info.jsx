import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Info() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const info = useInitial(initial, 'clientInfo.info', [])

  return (
    <AdminForm.Inputlist
      title="Информация"
      buttonText="Добавить информацию"
      errors={errors}
      initial={info}
      name="clientInfo.info"
    />
  )
}
