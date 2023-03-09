import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Shedule() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const shedule = useInitial(initial, 'clientInfo.shedule', [])

  return (
    <AdminForm.Shedule
      title="Режим работы (для клиента)"
      name="clientInfo.shedule"
      errors={errors}
      initial={shedule}
    />
  )
}
