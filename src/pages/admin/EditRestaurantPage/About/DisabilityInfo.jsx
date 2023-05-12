import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useInitial } from 'hooks'

export default function DisabilityInfo() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [info, setInfo] = useInitial(initial, 'clientInfo.disabilityInfo', [])

  return (
    <AdminForm.Inputlist
      title="Информация для людей с ограниченными возможностями"
      buttonText="Добавить информацию"
      errors={errors}
      info={info}
      setInfo={setInfo}
      name="clientInfo.disabilityInfo"
    />
  )
}
