import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Address() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const address = useInitial(initial, 'address', '')
  const coordinates = useInitial(initial, 'point.coordinates', '')

  return (
    <AdminForm.Address
      address={address}
      coordinates={coordinates}
      errors={errors}
    />
  )
}
