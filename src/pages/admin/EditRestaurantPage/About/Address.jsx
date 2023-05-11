import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Address() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [address, setAddress] = useInitial(initial, 'address', '')
  const [coordinates, setCoordinates] = useInitial(
    initial,
    'point',
    // 'point.coordinates',
    ''
  )

  return console.log(coordinates)

  return (
    <AdminForm.Address
      address={address}
      setAddress={setAddress}
      coordinates={coordinates}
      setCoordinates={setCoordinates}
      errors={errors}
    />
  )
}
