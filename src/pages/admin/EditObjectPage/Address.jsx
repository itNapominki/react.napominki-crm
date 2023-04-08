import React from 'react'
import { AdminForm } from 'components'
import { EditObjectContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Address() {
  const {
    initial,
    error: { errors },
  } = React.useContext(EditObjectContext)

  const [address, setAddress] = useInitial(initial, 'address', '')
  const [coordinates, setCoordinates] = useInitial(
    initial,
    'point.coordinates',
    ''
  )

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
