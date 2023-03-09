import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Shedule() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const initialState = useInitial(initial, 'managerInfo.shedule', [])

  return (
    <AdminForm.Shedule
      title="Режим работы (для клиента)"
      name="managerInfo.shedule"
      errors={errors}
      initial={initialState}
    />
  )
}
