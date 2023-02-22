import React from 'react'

import { AdminForm } from 'components/admin'
import { Station, SettingsModal } from './components'

import { EditRestaurantContext, EditRelatedMetroContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Metro() {
  const {
    initial,
    setData,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [modalVisible, setModalVisible] = React.useState(false)
  const [relatedMetro, setRelatedMetro] = useInitial(
    initial,
    'clientInfo.relatedMetro',
    []
  )

  const toggleModal = () => setModalVisible((prev) => !prev)

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
        button={{ text: 'Настроить', onClick: toggleModal }}
      >
        {relatedMetro?.map((station, i) => (
          <div key={station.id} className="col col-4">
            <Station station={station} errors={errors} i={i} />
          </div>
        ))}
      </AdminForm.Group>

      <EditRelatedMetroContext.Provider
        value={{ relatedMetro, setRelatedMetro }}
      >
        {modalVisible && <SettingsModal toggleModal={toggleModal} />}
      </EditRelatedMetroContext.Provider>
    </React.Fragment>
  )
}
