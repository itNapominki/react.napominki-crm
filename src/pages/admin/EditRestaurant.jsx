import React from 'react'
import {
  AdminLayout,
  RestarauntSettings,
  // AddRestaurantHalls,
  // AddRestaurantMenus,
  // AddRestaurantManagerInfo,
} from '../../components'
import { useParams } from 'react-router-dom'
import { useApi } from '../../hooks'
import { api } from '../../utils'

const FORM = {
  INFO: 'INFO',
  HALLS: 'HALLS',
  MENUS: 'MENUS',
  MANAGER_INFO: 'MANAGER_INFO',
}

export default function AddRestaurant() {
  let { id } = useParams()
  const restaurantInfo = useApi({
    request: api.restaurants.getById,
    params: id,
  })
  const [visibleForm, setVisibleForm] = React.useState(FORM.INFO)

  const navigation = [
    {
      text: 'О ресторане',
      callback: () => setVisibleForm(FORM.INFO),
    },
    {
      text: 'Поминальные залы',
      callback: () => setVisibleForm(FORM.HALLS),
    },
    {
      text: 'Поминальное меню',
      callback: () => setVisibleForm(FORM.MENUS),
    },
    {
      text: 'Инфо для менеджера',
      callback: () => setVisibleForm(FORM.MANAGER_INFO),
    },
  ]

  return (
    <AdminLayout navigation={navigation}>
      {visibleForm === FORM.INFO && (
        <RestarauntSettings.Info data={restaurantInfo} />
      )}
      {/* {visibleForm === FORM.HALLS && <AddRestaurantHalls />} */}
      {/* {visibleForm === FORM.MENUS && <AddRestaurantMenus />} */}
      {/* {visibleForm === FORM.MANAGER_INFO && <AddRestaurantManagerInfo />} */}
    </AdminLayout>
  )
}
