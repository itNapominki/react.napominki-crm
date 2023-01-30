import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AdminData, AdminLayout } from 'components'

export default function AdminPage() {
  console.log('render AdminPage')

  const navigation = [
    {
      text: 'Пользователи',
      to: 'users',
    },
    {
      text: 'Рестораны',
      to: 'restaurants',
    },
    {
      text: 'Объекты',
      to: 'objects',
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
