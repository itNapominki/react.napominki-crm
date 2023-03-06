import React from 'react'
import { AdminForm } from 'components/admin'
import { Coordinates, House, Location, Street } from './components'

export default function Address({ address, initial, setAddress, errors }) {
  console.log('render Address')

  return (
    <AdminForm.Group title="Адрес">
      <Location initial={initial} setAddress={setAddress} />

      <Street initial={initial} setAddress={setAddress} errors={errors} />
      <House initial={initial} setAddress={setAddress} errors={errors} />
      <Coordinates
        initial={initial}
        setAddress={setAddress}
        errors={errors}
        address={address}
      />
    </AdminForm.Group>
  )
}
