import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useInitial } from 'hooks'

export default function Shedule() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [shedule, setShedule] = useInitial(initial, 'managerInfo.shedule', [])

  return (
    <AdminForm.Shedule
      title="Режим работы (реальный)"
      name="managerInfo.shedule"
      shedule={shedule}
      setShedule={setShedule}
      errors={errors}
    />
  )
}
