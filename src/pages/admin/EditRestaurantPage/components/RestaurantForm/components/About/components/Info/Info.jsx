import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Info() {
  const {
    initial,
    setData,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [initialState] = useInitial(initial, 'clientInfo.info', [])
  const [info, setInfo] = React.useState([])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        clientInfo: {
          ...prev.clientInfo,
          info,
        },
      }
    })
  }, [info])

  return (
    <AdminForm.Inputlist
      title="Информация"
      buttonText="Добавить информацию"
      onChange={setInfo}
      errors={errors
        ?.filter(({ param }) => param.includes('clientInfo.info'))
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
