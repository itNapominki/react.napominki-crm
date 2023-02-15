import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'core/hooks'

export default function Shedule() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, setData, errors } = context

  const [initialState] = useInitial(initial, 'managerInfo.shedule', [])
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
