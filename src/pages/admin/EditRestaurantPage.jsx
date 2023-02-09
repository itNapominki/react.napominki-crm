import React from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import { AdminLayout, EditRestaurant } from 'components'
import { EditRestaurantContext } from 'context'
import { useFetch } from 'hooks'

export default React.memo(function EditRestaurantPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const serverData = id ? useFetch('/restaurants/' + id) : null
  const [data, setData] = React.useState({})
  const [errors, setErrors] = React.useState()

  React.useEffect(() => {
    if (serverData) {
      setData(serverData)
    }
  }, [serverData])

  const navigation = [
    {
      text: 'О ресторане',
      onClick: () => navigate('info'),
    },
    {
      text: 'Поминальные залы',
      onClick: () => navigate('halls'),
    },
    {
      text: 'Поминальное меню',
      onClick: () => navigate('menus'),
    },
    {
      text: 'Инфо для менеджера',
      onClick: () => navigate('manager'),
    },
  ]

  return (
    <EditRestaurantContext.Provider
      value={{ id, data, serverData, setData, errors, setErrors }}
    >
      <AdminLayout navigation={id ? navigation : null}>
        {id ? (
          <Routes>
            <Route path="info" element={<EditRestaurant.About />} />
            <Route path="halls" element={<EditRestaurant.Halls />} />
            <Route path="menus" element={<EditRestaurant.Menus />} />
            <Route path="manager" element={<EditRestaurant.Manager />} />
          </Routes>
        ) : (
          <EditRestaurant.About />
        )}
      </AdminLayout>
    </EditRestaurantContext.Provider>
  )
})
