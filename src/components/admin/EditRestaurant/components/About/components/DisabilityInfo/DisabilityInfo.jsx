import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function DisabilityInfo() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, setData, errors } = context

  const [disabilityInfo, setDisabilityInfo] = React.useState([])
  const [initialState] = useInitial(initial, 'clientInfo.disabilityInfo', [])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        clientInfo: {
          ...prev.clientInfo,
          disabilityInfo,
        },
      }
    })
  }, [disabilityInfo])

  return (
    <AdminForm.Inputlist
      title="Информация для людей с ограниченными возможностями"
      buttonText="Добавить информацию"
      onChange={setDisabilityInfo}
      formName="clientInfo.disabilityInfo"
      errors={errors}
      initialState={initialState}
    />
  )
}
