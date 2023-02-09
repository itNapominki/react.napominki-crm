import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AdminData, AdminLayout } from 'components'

export default function AdminPage() {
  console.log('render AdminPage')

  const navigate = useNavigate()

  const navigation = [
    {
      text: 'Пользователи',
      onClick: () => navigate('users'),
    },
    {
      text: 'Рестораны',
      onClick: () => navigate('restaurants'),
    },
    {
      text: 'Объекты',
      onClick: () => navigate('objects'),
    },
  ]

  return (
    <AdminLayout navigation={navigation}>
      <div className="admin-data">
        <Routes>
          <Route path="users" element={<AdminData.Users />} />
          <Route path="restaurants" element={<AdminData.Restaurants />} />
          <Route path="objects" element={<AdminData.Objects />} />
        </Routes>
      </div>
    </AdminLayout>
  )
}
