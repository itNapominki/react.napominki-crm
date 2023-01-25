import React from 'react'
import { AdminForm } from 'components'
import {
  Address,
  Comment,
  DisabilityInfo,
  Heading,
  Info,
  Shedule,
} from './components'
import { EditRestaurantContext } from 'context'

export default function About() {
  const [data, setData] = React.useState({})

  return (
    <EditRestaurantContext.Provider value={{ setData }}>
      <AdminForm>
        <Heading />
        <Address />
        <Shedule />
        <Info />
        <DisabilityInfo />
        <Comment />
      </AdminForm>
    </EditRestaurantContext.Provider>
  )
}
