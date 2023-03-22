import styles from './WorkspacePage.module.scss'
import React from 'react'

import { Layout } from 'components/general'
import { Map, Offer, RestaurantModal } from './components'

import { ManagerOfferContext } from 'core/context'
import { useHandlers } from './hooks'

export default function WorkspacePage() {
  console.log('render WorkspacePage')

  const [modalFor, setModalFor] = React.useState()
  const [offer, handle] = useHandlers()

  return (
    <ManagerOfferContext.Provider value={{ handle, offer, setModalFor }}>
      <Layout>
        {modalFor && (
          <RestaurantModal id={modalFor} onClose={() => setModalFor(null)} />
        )}

        <div className="wrapper">
          {/* <ManagerTools /> */}
          <Map setModalFor={setModalFor} />
          <Offer />
        </div>
      </Layout>
    </ManagerOfferContext.Provider>
  )
}
