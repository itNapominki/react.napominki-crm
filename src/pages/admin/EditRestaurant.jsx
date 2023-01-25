import React from 'react'
import { AdminLayout, EditRestaurantForms } from 'components'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'

export default function EditRestaurant() {
  let { id } = useParams()

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
    <AdminLayout navigation={id ? navigation : null}>
      <EditRestaurantForms />
    </AdminLayout>
  )
}
