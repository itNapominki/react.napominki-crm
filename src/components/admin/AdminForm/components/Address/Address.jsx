import React from 'react'
import { AdminForm } from 'components/admin'
import { Coordinates, House, Location, Street } from './components'

export default function Address({ address, initialState, setAddress, errors }) {
  console.log('render Address')

  return (
    <AdminForm.Group title="Адрес">
      <Location initialState={initialState} setAddress={setAddress} />
      <Street
        initialState={initialState}
        setAddress={setAddress}
        errors={errors}
      />
      <House
        initialState={initialState}
        setAddress={setAddress}
        errors={errors}
      />
      <Coordinates
        initialState={initialState}
        setAddress={setAddress}
        errors={errors}
        address={address}
      />
    </AdminForm.Group>
  )
}
