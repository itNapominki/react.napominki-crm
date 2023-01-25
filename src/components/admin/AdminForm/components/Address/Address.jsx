import React from 'react'
import { AdminForm } from 'components'
import { Coordinates, House, Location, Street } from './components'
import { useString } from './hooks'

export default function Address(data) {
  const { context } = data

  const [address, setAddress] = React.useState({})
  const string = useString(address)

  return (
    <AdminForm.Group title="Адрес">
      <Location context={context} setAddress={setAddress} />
      <Street context={context} setAddress={setAddress} />
      <House context={context} setAddress={setAddress} />
      <Coordinates
        addressString={string}
        context={context}
        setAddress={setAddress}
      />
    </AdminForm.Group>
  )
}
