import React from 'react'
import { AdminForm } from 'components'
import { Delivery, Food, Id, IdFromGoogleShets, NumberOfFloors, Prepay, Priority, Status } from '.'

export default function MainGroup() {
  return (
    <AdminForm.Group>
      <Id /> 
      <IdFromGoogleShets/> 
      <Status />
      <Priority />
      <Food />
      <Delivery />
      <Prepay />
      <NumberOfFloors/>
    </AdminForm.Group>
  )
}
