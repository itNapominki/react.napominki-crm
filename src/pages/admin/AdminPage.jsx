import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AdminData, AdminLayout } from 'components'

export default function AdminPage() {
  console.log('render AdminPage')

  const { pathname: location } = useLocation()
  const navigate = useNavigate()

  const navigation = [
    {
      text: 'Пользователи',
      callback: () => navigate('/admin/users'),
    },
    {
      text: 'Рестораны',
      callback: () => navigate('/admin/restaurants'),
    },
    {
      text: 'Объекты',
      callback: () => navigate('/admin/objects'),
    },
  ]

  return (
    <AdminLayout navigation={navigation}>
      <div className="admin-data">
        {location.includes('users') && <AdminData.Users />}
        {location.includes('objects') && <AdminData.Objects />}
        {location.includes('restaurants') && <AdminData.Restaurants />}
      </div>
    </AdminLayout>
  )
}
