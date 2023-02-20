import React from 'react'
import { useParams } from 'react-router-dom'
import { Forbidden, Layout } from 'components/general'
import { EditRestaurant } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { api } from 'core/utils'
import { useSelector } from 'react-redux'
import { USER_ROLES } from 'core/constants'

export default function EditRestaurantPage() {
  console.log('render EditRestaurantPage')

  const { id } = useParams()
  const { data: initial } = id
    ? api.getOne({ model: api.model.restaurant, id })
    : {}

  const [data, setData] = React.useState({})
  const [errors, setErrors] = React.useState()

  React.useEffect(() => {
    if (initial) {
      setData(initial)
    }
  }, [initial])

  const user = useSelector((state) => state.user.value)
  if (
    !user ||
    (user.role !== USER_ROLES.ADMIN.VALUE &&
      user.role !== USER_ROLES.REDAKTOR.VALUE)
  ) {
    return <Forbidden />
  }

  return (
    <EditRestaurantContext.Provider
      value={{ id, initial, data, setData, errors, setErrors }}
    >
      <Layout>
        <EditRestaurant />
      </Layout>
    </EditRestaurantContext.Provider>
  )
}
