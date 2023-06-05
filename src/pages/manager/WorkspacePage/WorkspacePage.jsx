import styles from './WorkspacePage.module.scss'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

import { Map, MapOsmLeaflet, Offer, RestaurantModal, Tools } from './components'

import { ManagerOfferContext } from 'context'
import { useHandlers, useSearch } from './hooks'
import { OBJECT_TYPES } from 'constants'
import { USER_ROLES } from 'constants'
import { getObjKeyName } from 'utils'

export default function WorkspacePage() {
  const { setRoles, user } = useOutletContext()
  setRoles([
    getObjKeyName(() => USER_ROLES.ADMIN),
    getObjKeyName(() => USER_ROLES.MANAGER),
  ])

  const [modalFor, setModalFor] = React.useState()
  const [offer, handle] = useHandlers(user)

  const [filterVisible, setFilterVisible] = React.useState(false)
  const [visibleObjects, setVisibleObjects] = React.useState(
    Object.keys(OBJECT_TYPES)
  )
  const [radiusFilter, setRadiusFilter] = React.useState({})

  const [search, setSearch] = React.useState('')

  const [mapSettings, setMapSettings] = React.useState({})

  const [searched, searchedVisible, setSearchedVisible, searchedCoords] =
    useSearch(search, setMapSettings, setModalFor)

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
        searchedCoords,
        mapSettings,
        setMapSettings,
        searchedVisible,
        setSearchedVisible,
      }}
    >
      <Tools />
      
      {/* <Map />   */}
      <MapOsmLeaflet/>    
      <Offer />

      {modalFor && (
        <RestaurantModal id={modalFor} onClose={() => setModalFor(null)} />
      )}
    </ManagerOfferContext.Provider>
  )
}
