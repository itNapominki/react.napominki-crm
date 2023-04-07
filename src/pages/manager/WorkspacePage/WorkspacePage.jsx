import styles from './WorkspacePage.module.scss'
import React from 'react'
import { useSelector } from 'react-redux'

import { Layout } from 'components'
import { Map, Offer, RestaurantModal, Tools } from './components'

import { ManagerOfferContext } from 'core/context'
import { useHandlers, useSearch } from './hooks'
import { OBJECT_TYPES } from 'core/constants'

export default function WorkspacePage() {
  console.log('render WorkspacePage')

  const user = useSelector((state) => state.user.value)

  const [modalFor, setModalFor] = React.useState()
  const [offer, handle] = useHandlers(user)

  const [filterVisible, setFilterVisible] = React.useState(false)
  const [visibleObjects, setVisibleObjects] = React.useState(
    Object.keys(OBJECT_TYPES)
  )
  const [radiusFilter, setRadiusFilter] = React.useState({})

  const [search, setSearch] = React.useState('')

  const [mapSettings, setMapSettings] = React.useState({})

  const [searched, searchedVisible, setSearchedVisible] = useSearch(
    search,
    setMapSettings,
    setModalFor
  )

  return (
    <ManagerOfferContext.Provider
      value={{
        handle,
        offer,
        setModalFor,
        visibleObjects,
        setVisibleObjects,
        radiusFilter,
        setRadiusFilter,
        filterVisible,
        setFilterVisible,
        setSearch,
        searched,
        mapSettings,
        setMapSettings,
        searchedVisible,
        setSearchedVisible,
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
