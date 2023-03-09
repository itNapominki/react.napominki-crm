import React from 'react'

import { AdminForm } from 'components/admin'
import { Station, SettingsModal } from './components'

import { EditRestaurantContext, EditRelatedMetroContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Metro() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [modalVisible, setModalVisible] = React.useState(false)
  const [relatedMetro, setRelatedMetro] = React.useState([])

  const initialState = useInitial(initial, 'clientInfo.relatedMetro', [])
  React.useEffect(() => setRelatedMetro(initialState), [initialState])

  const toggleModal = () => setModalVisible((prev) => !prev)

  return (
    <React.Fragment>
      <AdminForm.Group
        title="Связанные метро"
        button={{ text: 'Настроить', onClick: toggleModal }}
      >
        {relatedMetro?.map((station, i) => {
          const name = `clientInfo.relatedMetro[${i}]`

          return (
            <div key={i} className="col col-4">
              <Station station={station} name={name} errors={errors} />
            </div>
          )
        })}
      </AdminForm.Group>

      <EditRelatedMetroContext.Provider
        value={{ relatedMetro, setRelatedMetro }}
      >
        {modalVisible && <SettingsModal toggleModal={toggleModal} />}
      </EditRelatedMetroContext.Provider>
    </React.Fragment>
  )
}
