import React from 'react'
import { AdminForm, AdminModal } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'core/hooks'

export default function RelatedRestaurants() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, setData } = context

  const [modalVisible, setModalVisible] = React.useState(false)
  const [relatedMetro, setRelatedMetro] = useInitial(
    initial,
    'clientInfo.relatedMetro',
    []
  )

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        clientInfo: {
          ...prev.clientInfo,
          relatedMetro,
        },
      }
    })
  }, [relatedMetro])
  return (
    <React.Fragment>
      <AdminForm.Group
        title="Связанные рестораны"
        button={{ text: 'Настроить' }}
      ></AdminForm.Group>

      <AdminModal search onClose={() => setModalVisible(false)}>
        <AdminModal.Restaurants />
      </AdminModal>
    </React.Fragment>
  )
}
