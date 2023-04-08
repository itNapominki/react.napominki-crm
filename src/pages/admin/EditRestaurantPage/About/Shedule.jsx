import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Shedule() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [shedule, setShedule] = useInitial(initial, 'clientInfo.shedule', [])

  return (
    <AdminForm.Shedule
      title="Режим работы (для клиента)"
      name="clientInfo.shedule"
      errors={errors}
      shedule={shedule}
      setShedule={setShedule}
    />
  )
}
