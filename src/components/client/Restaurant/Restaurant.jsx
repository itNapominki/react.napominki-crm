import './Restaurant.scss'
import React from 'react'
import { ClientCard } from 'components'
import { RestaurantContext } from 'core/context'
import { Halls, Info, Map, Menus, Offer } from './components'

export default function Restaurant() {
  const context = React.useContext(RestaurantContext)

  if (!context) {
    return console.log('Загрузка')
  }

  return (
    <div className="cm-restaurant">
      <Info />
      <Halls />
      <Menus />
      <Map />
      <ClientCard>
        <Offer title="Чтобы выбрать этот филиал, напишите своему менеджеру" />
      </ClientCard>
    </div>
  )
}
