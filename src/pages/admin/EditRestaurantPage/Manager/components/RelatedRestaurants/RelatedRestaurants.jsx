import React from 'react'

import { AdminForm } from 'components'
import { Restaurant, SettingsModal } from './components'

import { EditRestaurantContext, EditRelatedRestaurantsContext } from 'context'
import { useInitial } from 'hooks'

export default function RelatedRestaurant() {
  const {
    initial,
    setData,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [modalVisible, setModalVisible] = React.useState(false)
  const [relatedRestaurants, setRelatedRestaurants] = useInitial(
    initial,
    'managerInfo.relatedRestaurants',
    []
  )

  const toggleModal = () => setModalVisible((prev) => !prev)

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        managerInfo: {
          ...prev.managerInfo,
          relatedRestaurants,
        },
      }
    })
  }, [relatedRestaurants])

  return (
    <React.Fragment>
      <AdminForm.Group
        title="Связанные рестораны"
        button={{ text: 'Настроить', onClick: toggleModal }}
      >
        {relatedRestaurants?.map((restaurant, i) => (
          <div key={restaurant.id} className="col col-6">
            <Restaurant restaurant={restaurant} errors={errors} i={i} />
          </div>
        ))}
      </AdminForm.Group>

      <EditRelatedRestaurantsContext.Provider
        value={{ relatedRestaurants, setRelatedRestaurants }}
      >
        {modalVisible && <SettingsModal toggleModal={toggleModal} />}
      </EditRelatedRestaurantsContext.Provider>
    </React.Fragment>
  )
}
