import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'

export default function DisabilityInfo() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, setData, errors } = context

  const [disabilityInfo, setDisabilityInfo] = React.useState([])
  const [initialState] = useServerData(
    serverData,
    'clientInfo.disabilityInfo',
    []
  )

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
