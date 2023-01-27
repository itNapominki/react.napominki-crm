import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'

export default function Shedule() {
  const context = React.useContext(EditRestaurantContext)
  const { setData, errors } = context

  const [shedule, setShedule] = React.useState([])

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
    />
  )
}
