import React from 'react'
import { AdminForm } from 'components'
import { Coordinates, House, Location, Street } from './components'

export default function Address(data) {
  const { address, setAddress, errors } = data
  const context = {}

  return (
    <AdminForm.Group title="Адрес">
      <Location context={context} address={address} setAddress={setAddress} />
      <Street
        context={context}
        address={address}
        setAddress={setAddress}
        errors={errors}
      />
      <House
        context={context}
        address={address}
        setAddress={setAddress}
        errors={errors}
      />
      <Coordinates
        context={context}
        address={address}
        setAddress={setAddress}
        errors={errors}
      />
    </AdminForm.Group>
  )
}
