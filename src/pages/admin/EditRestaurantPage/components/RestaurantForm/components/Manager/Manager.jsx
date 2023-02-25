import React from 'react'
import {
  Comment,
  Contacts,
  MainGroup,
  RelatedRestaurants,
  Shedule,
  Whatsapp,
} from './components'

export default function Manager() {
  console.log('render EditRestaurant ManagerInfo')

  return (
    <React.Fragment>
      <MainGroup />
      <Shedule />
      <RelatedRestaurants />
      <Contacts />
      <Whatsapp />
      <Comment />
    </React.Fragment>
  )
}
