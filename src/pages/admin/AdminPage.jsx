import React from 'react'
import { AdminData, AdminLayout } from 'components'

export default function AdminPage() {
  const [location, setLocation] = React.useState('users')

  console.log('render AdminPage')

  const navigation = [
    {
      text: 'Пользователи',
      callback: () => setLocation('users'),
    },
    {
      text: 'Рестораны',
      callback: () => setLocation('restaurants'),
    },
    {
      text: 'Объекты',
      callback: () => setLocation('objects'),
    },
  ]

  return (
    <AdminLayout navigation={navigation}>
      <div className="admin-data">
        {location === 'users' && <AdminData.Users />}
        {location === 'objects' && <AdminData.Objects />}
        {location === 'restaurants' && <AdminData.Restaurants />}
      </div>
    </AdminLayout>
  )
}
