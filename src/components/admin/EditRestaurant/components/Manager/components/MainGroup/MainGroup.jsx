import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'
import { Delivery, Food, Id, Prepay, Priority, Status } from './components'

export default function MainGroup() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, errors, setData } = context

  const [initialId] = useServerData(serverData, 'id', '')
  const [initialStatus] = useServerData(serverData, 'status', '')
  const [initialPriority] = useServerData(serverData, 'priority', '')
  const [initialFood] = useServerData(serverData, 'food', '')
  const [initialDelivery] = useServerData(serverData, 'delivery', '')
  const [initialPrepay] = useServerData(serverData, 'prepay', '')

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
