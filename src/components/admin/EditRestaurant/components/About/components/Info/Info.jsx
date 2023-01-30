import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'

export default function Info() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, setData, errors } = context

  const [initialState] = useServerData(serverData, 'clientInfo.info', [])
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
