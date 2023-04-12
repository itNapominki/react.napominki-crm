import React, { Children } from 'react'
import LazyPage from './LazyPage'

import { OfferPage, RestaurantPage } from 'pages/client'
import { WorkspacePage } from 'pages/manager'

const AuthPage = React.lazy(() => import('pages/admin/AuthPage/AuthPage'))
const ObjectsPage = React.lazy(() =>
  import('pages/admin/ObjectsPage/ObjectsPage')
)
const EditObjectPage = React.lazy(() =>
  import('pages/admin/EditObjectPage/EditObjectPage')
)
const RestaurantsPage = React.lazy(() =>
  import('pages/admin/RestaurantsPage/RestaurantsPage')
)
const EditRestaurantPage = React.lazy(() =>
  import('pages/admin/EditRestaurantPage/EditRestaurantPage')
)
const UsersPage = React.lazy(() => import('pages/admin/UsersPage/UsersPage'))
const EditUserPage = React.lazy(() =>
  import('pages/admin/EditUserPage/EditUserPage')
)

const SettingsPage = React.lazy(() =>
  import('pages/admin/SettingsPage/SettingsPage')
)

const UserLayout = React.lazy(() =>
  import('components/Layout/UserLayout/UserLayout')
)

const ClientLayout = React.lazy(() =>
  import('components/Layout/ClientLayout/ClientLayout')
)

export const ROUTES = {
  OFFER: {
    PATH: '/offer',
    COMPONENT: <LazyPage Component={<ClientLayout />} />,
    CHILDREN: {
      MAIN: {
        PATH: '/offer',
        COMPONENT: <OfferPage />,
      },
      RESTAURANT: {
        PATH: '/offer/restaurant/:id',
        COMPONENT: <RestaurantPage />,
      },
    },
  },

  WORKSPACE: {
    PATH: '/workspace',
    COMPONENT: <WorkspacePage />,
  },

  AUTH: {
    PATH: '/auth',
    COMPONENT: <LazyPage Component={<AuthPage />} />,
  },

  ADMIN: {
    PATH: '/admin',
    COMPONENT: <LazyPage Component={<UserLayout />} />,
    CHILDREN: {
      OBJECTS: {
        PATH: '/admin/objects',
        COMPONENT: <LazyPage Component={<ObjectsPage />} />,
      },
      OBJECTS_CREATE: {
        PATH: '/admin/objects/create',
        COMPONENT: <LazyPage Component={<EditObjectPage />} />,
      },

      OBJECTS_UPDATE: {
        PATH: '/admin/objects/update/:id',
        COMPONENT: <LazyPage Component={<EditObjectPage />} />,
      },

      RESTAURANTS: {
        PATH: '/admin/restaurants',
        COMPONENT: <LazyPage Component={<RestaurantsPage />} />,
      },

      RESTAURANTS_CREATE: {
        PATH: '/admin/restaurants/create',
        COMPONENT: <LazyPage Component={<EditRestaurantPage />} />,
      },

      RESTAURANTS_UPDATE: {
        PATH: '/admin/restaurants/update/:id',
        COMPONENT: <LazyPage Component={<EditRestaurantPage />} />,
      },

      USERS: {
        PATH: '/admin/users',
        COMPONENT: <LazyPage Component={<UsersPage />} />,
      },
      USERS_CREATE: {
        PATH: '/admin/users/create',
        COMPONENT: <LazyPage Component={<EditUserPage />} />,
      },
      USERS_UPDATE: {
        PATH: '/admin/users/update/:id',
        COMPONENT: <LazyPage Component={<EditUserPage />} />,
      },

      SETTINGS: {
        PATH: '/admin/settings',
        COMPONENT: <LazyPage Component={<SettingsPage />} />,
      },
    },
  },
}
