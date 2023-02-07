import React from 'react'
import { AdminForm } from 'components'
import { EditObjectContext } from 'context'
import { useServerData } from 'hooks'

export default function Address() {
  const context = React.useContext(EditObjectContext)
  const { serverData, setData, errors } = context

  const [initialState] = useServerData(serverData, 'address', {})
  const [address, setAddress] = React.useState()

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
      initialState={initialState}
      setAddress={setAddress}
      errors={errors}
    />
  )
}
