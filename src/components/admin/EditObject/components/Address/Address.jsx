import React from 'react'
import { AdminForm } from 'components/admin'
import { EditObjectContext } from 'core/context'
import { useInitial } from 'core/hooks'

export default function Address() {
  const context = React.useContext(EditObjectContext)
  const { initial, setData, errors } = context

  const [initialState] = useInitial(initial, 'address', {})
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
