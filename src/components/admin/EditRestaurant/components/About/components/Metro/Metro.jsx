import React from 'react'
import { AdminForm, AdminModal } from 'components'
import { EditRestaurantContext } from 'context'
import { useServerData } from 'hooks'
import { Station } from './components'

export default function Metro() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, setData } = context

  const [modalVisible, setModalVisible] = React.useState(false)
  const [relatedMetro, setRelatedMetro] = useServerData(
    serverData,
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
        title="Связанные метро"
        button={{ text: 'Настроить', onClick: () => setModalVisible(true) }}
      >
        {relatedMetro.map((station) => (
          <div key={station.id} className="col col-4">
            <Station station={station} />
          </div>
        ))}
      </AdminForm.Group>
      {modalVisible && (
        <AdminModal search onClose={() => setModalVisible(false)}>
          <AdminModal.Metro related={relatedMetro} onChange={setRelatedMetro} />
        </AdminModal>
      )}
    </React.Fragment>
  )
}
