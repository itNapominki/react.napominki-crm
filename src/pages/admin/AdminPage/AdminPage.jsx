import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { AdminData } from 'components'
import { Layout, Tabs, Forbidden } from 'components/general'
import { ROUTES } from 'core/router/routes'
import { USER_ROLE } from 'core/constants'

export default function AdminPage() {
  console.log('render AdminPage')

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const user = useSelector((state) => state.user.value)

  const navigation = [
    {
      text: 'Пользователи',
      onClick: () => navigate(ROUTES.ADMIN_USERS.PATH),
      route: ROUTES.ADMIN_USERS.PATH,
    },
    {
      text: 'Рестораны',
      onClick: () => navigate(ROUTES.ADMIN_RESTAURANTS.PATH),
      route: ROUTES.ADMIN_RESTAURANTS.PATH,
    },
    {
      text: 'Объекты',
      onClick: () => navigate(ROUTES.ADMIN_OBJECTS.PATH),
      route: ROUTES.ADMIN_OBJECTS.PATH,
    },
  ]

  if (user && user.role === USER_ROLE.REDAKTOR) {
    navigation.shift()
  }

  const show = pathname.split('/').pop()
  const activeTab = navigation.findIndex(
    ({ route }) => route.split('/').pop() === show
  )

  if (
    !user ||
    (user.role !== USER_ROLE.ADMIN && show === 'users') ||
    (user.role !== USER_ROLE.ADMIN && user.role !== USER_ROLE.REDAKTOR)
  ) {
    return <Forbidden />
  }

  return (
    <Layout>
      <div className="wrapper">
        <Tabs buttons={navigation} initial={activeTab} />
        <AdminData show={show} />
      </div>
    </Layout>
  )
}
