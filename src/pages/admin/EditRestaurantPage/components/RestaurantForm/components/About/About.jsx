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
      <Address />
      <Metro />
      <Shedule />
      <Info />
      <DisabilityInfo />
      <Comment />
    </React.Fragment>
  )
}
