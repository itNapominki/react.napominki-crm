import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'

export default function Shedule() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, setData, errors } = context

  const [initialState] = useServerData(serverData, 'clientInfo.shedule', [])
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
