import React from 'react'
import {
  Address,
  Comment,
  DisabilityInfo,
  Heading,
  Info,
  Metro,
  Shedule,
} from './components'

export default function About() {
  console.log('render EditRestaurant About')

  return (
    <React.Fragment>
      <Heading />
      <Info />
      <DisabilityInfo />
      <Comment />
      {/* <Address />
      <Metro />
      <Shedule /> */}
    </React.Fragment>
  )
}
