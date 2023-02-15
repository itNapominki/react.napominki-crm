import React from 'react'
import { AdminForm, AdminModal } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'core/hooks'
import { Station } from './components'

export default function Metro() {
  const context = React.useContext(EditRestaurantContext)
  const { initial, setData, errors } = context

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
        title="Связанные метро"
        button={{ text: 'Настроить', onClick: () => setModalVisible(true) }}
      >
        {relatedMetro.map((station, i) => (
          <div key={station.id} className="col col-4">
            <Station station={station} errors={errors} i={i} />
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
