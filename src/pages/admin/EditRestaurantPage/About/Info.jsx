import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useInitial } from 'hooks'

export default function Info() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [info, setInfo] = useInitial(initial, 'clientInfo.info', [])

  return (
    <AdminForm.Inputlist
      title="Информация"
      buttonText="Добавить информацию"
      errors={errors}
      info={info}
      setInfo={setInfo}
      name="clientInfo.info"
    />
  )
}
