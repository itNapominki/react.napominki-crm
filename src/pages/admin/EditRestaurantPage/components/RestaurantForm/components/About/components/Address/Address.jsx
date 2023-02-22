import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Address() {
  const {
    initial,
    setData,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

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
      initial={initialState}
      setAddress={setAddress}
      errors={errors
        ?.filter(({ param }) => param.includes('address'))
        .map((error) => {
          return {
            ...error,
            param: error.param.replace('address.', ''),
          }
        })}
    />
  )
}
