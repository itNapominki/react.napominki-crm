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

  ADMIN_OBJECTS: {
    PATH: '/admin/objects',
    COMPONENT: <LazyPage Component={<ObjectsPage />} />,
  },

  ADMIN_RESTAURANTS: {
    PATH: '/admin/restaurants',
    COMPONENT: <LazyPage Component={<RestaurantsPage />} />,
  },

  ADMIN_USERS: {
    PATH: '/admin/users',
    COMPONENT: <LazyPage Component={<UsersPage />} />,
  },

  ADMIN_CREATE_OBJECT: {
    PATH: '/admin/objects/create',
    COMPONENT: <LazyPage Component={<EditObjectPage />} />,
  },

  ADMIN_CREATE_RESTAURANT: {
    PATH: '/admin/restaurants/create',
    COMPONENT: <LazyPage Component={<EditRestaurantPage />} />,
  },

  ADMIN_CREATE_USER: {
    PATH: '/admin/users/create',
    COMPONENT: <LazyPage Component={<EditUserPage />} />,
  },

  ADMIN_UPDATE_OBJECT: {
    PATH: '/admin/objects/update/:id',
    COMPONENT: <LazyPage Component={<EditObjectPage />} />,
  },

  ADMIN_UPDATE_RESTAURANT: {
    PATH: '/admin/restaurants/update/:id',
    COMPONENT: <LazyPage Component={<EditRestaurantPage />} />,
  },

  ADMIN_UPDATE_USER: {
    PATH: '/admin/users/update/:id',
    COMPONENT: <LazyPage Component={<EditUserPage />} />,
  },
}
