import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Shedule() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, setData, errors } = context

  const [initialState] = useInitial(initial, 'clientInfo.shedule', [])
  const [shedule, setShedule] = React.useState()

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        clientInfo: {
          ...prev.clientInfo,
          shedule,
        },
      }
    })
  }, [shedule])

  return (
    <AdminForm.Shedule
      title="Режим работы (для клиента)"
      onChange={setShedule}
      formName="clientInfo.shedule"
      errors={errors}
      initialState={initialState}
    />
  )
}
