import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'
import { getChildrenErrors } from 'core/utils'

export default function Shedule() {
  const {
    initial,
    setData,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

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
      errors={getChildrenErrors(errors, 'managerInfo.shedule')}
      initial={initialState}
    />
  )
}
