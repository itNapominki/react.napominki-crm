import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'

export default function Shedule() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, setData, errors } = context

  const [initialState] = useServerData(serverData, 'managerInfo.shedule', [])
  const [shedule, setShedule] = React.useState()

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        managerInfo: {
          ...prev.managerInfo,
          shedule,
        },
      }
    })
  }, [shedule])

  return (
    <AdminForm.Shedule
      title="Режим работы (реальный)"
      onChange={setShedule}
      formName="managerInfo.shedule"
      errors={errors}
      initialState={initialState}
    />
  )
}
