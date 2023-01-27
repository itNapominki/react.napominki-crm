import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'

export default function Address() {
  const context = React.useContext(EditRestaurantContext)
  const { serverData, setData, errors } = context

  const [address, setAddress] = React.useState({})

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        address,
      }
    })
  }, [address])

  return (
    <AdminForm.Address
      address={address}
      setAddress={setAddress}
      errors={errors}
    />
  )
}
