import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function DisabilityInfo() {
  const {
    initial,
    setData,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

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
      errors={errors
        ?.filter(({ param }) => param.includes('clientInfo.disabilityInfo'))
        .map((error) => {
          return {
            ...error,
            param: error.param.split('[').pop().split(']')[0],
          }
        })}
      initial={initialState}
    />
  )
}
