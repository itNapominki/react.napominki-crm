import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'
import { Delivery, Food, Id, Prepay, Priority, Status } from './components'

export default function MainGroup() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const initialId = useInitial(initial, 'id', '')
  const initialStatus = useInitial(initial, 'status', '')
  const initialPriority = useInitial(initial, 'priority', '')
  const initialFood = useInitial(initial, 'food', '')
  const initialDelivery = useInitial(initial, 'delivery', '')
  const initialPrepay = useInitial(initial, 'prepay', '')

  return (
    <AdminForm.Group>
      <Id initial={initialId} errors={errors} />
      <Status initial={initialStatus} errors={errors} />
      <Priority initial={initialPriority} errors={errors} />
      <Food initial={initialFood} errors={errors} />
      <Delivery initial={initialDelivery} errors={errors} />
      <Prepay initial={initialPrepay} errors={errors} />
    </AdminForm.Group>
  )
}
