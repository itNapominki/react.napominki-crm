import React from 'react'
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

const UserLayout = React.lazy(() =>
  import('components/general/Layout/UserLayout/UserLayout')
)

export const ROUTES = {
  RESTAURANT: {
    PATH: '/restaurant/:id',
    COMPONENT: <RestaurantPage />,
  },

  OFFER: {
    PATH: '/offer',
    COMPONENT: <OfferPage />,
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
        PATH: 'objects',
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
        PATH: 'restaurants',
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
        PATH: 'users',
        COMPONENT: <LazyPage Component={<UsersPage />} />,
        CHILDREN: {},
      },
      USERS_CREATE: {
        PATH: 'users/create',
        COMPONENT: <LazyPage Component={<EditUserPage />} />,
      },
      USERS_UPDATE: {
        PATH: 'users/update/:id',
        COMPONENT: <LazyPage Component={<EditUserPage />} />,
      },

      SETTINGS: {
        PATH: 'settings',
      },
    },
  },
}
