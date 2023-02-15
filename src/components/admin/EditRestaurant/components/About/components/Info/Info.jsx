import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'core/hooks'

export default function Info() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, setData, errors } = context

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
      formName="clientInfo.info"
      errors={errors}
      initialState={initialState}
    />
  )
}
