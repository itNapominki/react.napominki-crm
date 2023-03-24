import styles from './WorkspacePage.module.scss'
import React from 'react'

import { Layout } from 'components/general'
import { Map, Offer, RestaurantModal, Tools } from './components'

import { ManagerOfferContext } from 'core/context'
import { useHandlers } from './hooks'
import { OBJECT_TYPES } from 'core/constants'

export default function WorkspacePage() {
  console.log('render WorkspacePage')

  const [modalFor, setModalFor] = React.useState()
  const [offer, handle] = useHandlers()

  const [visibleObjects, setVisibleObjects] = React.useState(
    Object.keys(OBJECT_TYPES)
  )

  return (
    <ManagerOfferContext.Provider
      value={{
        handle,
        offer,
        setModalFor,
        visibleObjects,
        setVisibleObjects,
      }}
    >
      <Layout>
        <div className="wrapper">
          <Tools />
          <Map />
          <Offer />
        </div>

        {modalFor && (
          <RestaurantModal id={modalFor} onClose={() => setModalFor(null)} />
        )}
      </Layout>
    </ManagerOfferContext.Provider>
  )
}
