import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function DisabilityInfo() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const disabilityInfo = useInitial(initial, 'clientInfo.disabilityInfo', [])

  return (
    <AdminForm.Inputlist
      title="Информация для людей с ограниченными возможностями"
      buttonText="Добавить информацию"
      errors={errors
        ?.filter(({ param }) => param.includes('clientInfo.disabilityInfo'))
        .map((error) => {
          return {
            ...error,
            param: error.param.split('[').pop().split(']')[0],
          }
        })}
      initial={disabilityInfo}
      name="clientInfo.disabilityInfo"
    />
  )
}
