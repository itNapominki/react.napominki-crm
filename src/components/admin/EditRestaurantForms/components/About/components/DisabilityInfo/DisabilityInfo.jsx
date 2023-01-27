import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'

export default function DisabilityInfo() {
  const context = React.useContext(EditRestaurantContext)
  const { setData, errors } = context

  const [disabilityInfo, setDisabilityInfo] = React.useState([])

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
    />
  )
}
