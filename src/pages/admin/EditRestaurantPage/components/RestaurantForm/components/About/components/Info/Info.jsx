import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Info() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const info = useInitial(initial, 'clientInfo.info', [])

  return (
    <AdminForm.Inputlist
      title="Информация"
      buttonText="Добавить информацию"
      errors={errors
        ?.filter(({ param }) => param.includes('clientInfo.info'))
        .map((error) => {
          return {
            ...error,
            param: error.param.split('[').pop().split(']')[0],
          }
        })}
      initial={info}
      name="clientInfo.info"
    />
  )
}
