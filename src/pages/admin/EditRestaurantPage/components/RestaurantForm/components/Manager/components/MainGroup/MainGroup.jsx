import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'
import { Delivery, Food, Id, Prepay, Priority, Status } from './components'

export default function MainGroup() {
  const {
    initial,
    error: { errors },
    setData,
  } = React.useContext(EditRestaurantContext)

  const [initialId] = useInitial(initial, 'id', '')
  const [initialStatus] = useInitial(initial, 'status', '')
  const [initialPriority] = useInitial(initial, 'priority', '')
  const [initialFood] = useInitial(initial, 'food', '')
  const [initialDelivery] = useInitial(initial, 'delivery', '')
  const [initialPrepay] = useInitial(initial, 'prepay', '')

  return (
    <AdminForm.Group>
      <Id initial={initialId} setData={setData} errors={errors} />
      <Status initial={initialStatus} setData={setData} errors={errors} />
      <Priority initial={initialPriority} setData={setData} errors={errors} />
      <Food initial={initialFood} setData={setData} errors={errors} />
      <Delivery initial={initialDelivery} setData={setData} errors={errors} />
      <Prepay initial={initialPrepay} setData={setData} errors={errors} />
    </AdminForm.Group>
  )
}
