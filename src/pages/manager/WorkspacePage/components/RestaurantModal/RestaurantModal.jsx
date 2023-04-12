import styles from './RestaurantModal.module.scss'
import React from 'react'

import { Spinner } from 'components'
import { Modal } from 'components/general'
import { About, Halls, Heading, HeaderLeft, Menus, Table } from './components'

import { ManagerRestaurantContext, ManagerOfferContext } from 'core/context'
import { handleAddHall, handleAddMenu } from './handlers'
import { useGetData } from './hooks'

export default function RestaurantModal({ id, onClose }) {
  const { handle, offer } = React.useContext(ManagerOfferContext)

  const [added, setAdded] = React.useState(
    offer.restaurants.find((rest) => rest.id === id)
  )
  const [halls, setHalls] = React.useState(added ? added.halls : [])

  const [data, menus, setMenus] = useGetData(id, added)

  return (
    <Modal.Container onClose={onClose}>
      <Modal.ModalSide
        side="left"
        headerLeft={
          <HeaderLeft
            added={added}
            onAdd={() =>
              handle.add(
                data,
                halls,
                menus.filter(({ added }) => added),
                setAdded
              )
            }
            onUpdate={() =>
              handle.update(
                id,
                halls,
                menus.filter(({ added }) => added)
              )
            }
            onDelete={() => handle.remove(id, setAdded)}
          />
        }
        onClose={onClose}
      >
        <Spinner show={!data} />

        {data && (
          <ManagerRestaurantContext.Provider
            value={{
              data,
              halls,
              menus,
              handleAddHall: (index) => handleAddHall(index, setHalls),
              handleAddMenu: (id) => handleAddMenu(id, setMenus),
            }}
          >
            <div className={styles.container}>
              <Heading />
              <About />
              <Table />
              <Halls />
              <Menus />
            </div>
          </ManagerRestaurantContext.Provider>
        )}
      </Modal.ModalSide>
    </Modal.Container>
  )
}
