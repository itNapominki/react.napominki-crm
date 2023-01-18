import React from 'react'
import { AdminForm, Input, AdminModal } from '../../../..'

export default function Metro(data) {
  const { relatedMetro, setRelatedMetro } = data
  const [modalVisible, setModalVisible] = React.useState(false)

  return (
    <React.Fragment>
      <AdminForm.Group
        title="Связанные метро"
        button={{ text: 'Настроить', onClick: () => setModalVisible(true) }}
      ></AdminForm.Group>
      {modalVisible && (
        <AdminModal onClose={() => setModalVisible(false)}>
          <AdminModal.Metro
            relatedMetro={relatedMetro}
            setRelatedMetro={setRelatedMetro}
          />
        </AdminModal>
      )}
    </React.Fragment>
  )
}
