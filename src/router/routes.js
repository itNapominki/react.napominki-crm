import React from 'react'
import LazyPage from './LazyPage'

import { OfferPage, RestaurantPage } from 'pages/client'
import { WorkspacePage } from 'pages/manager'
import {
  AuthPage,
  EditObjectPage,
  EditRestaurantPage,
  EditUserPage,
} from 'pages/admin'

const ObjectsPage = React.lazy(() =>
  import('pages/admin/ObjectsPage/ObjectsPage')
)
const RestaurantsPage = React.lazy(() =>
  import('pages/admin/RestaurantsPage/RestaurantsPage')
)
const UsersPage = React.lazy(() => import('pages/admin/UsersPage/UsersPage'))

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
    COMPONENT: <AuthPage />,
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
    COMPONENT: <EditObjectPage />,
  },

  ADMIN_CREATE_RESTAURANT: {
    PATH: '/admin/restaurants/create',
    COMPONENT: <EditRestaurantPage />,
  },

  ADMIN_CREATE_USER: {
    PATH: '/admin/users/create',
    COMPONENT: <EditUserPage />,
  },

  ADMIN_UPDATE_OBJECT: {
    PATH: '/admin/objects/update/:id',
    COMPONENT: <EditObjectPage />,
  },

  ADMIN_UPDATE_RESTAURANT: {
    PATH: '/admin/restaurants/update/:id',
    COMPONENT: <EditRestaurantPage />,
  },

  ADMIN_UPDATE_USER: {
    PATH: '/admin/users/update/:id',
    COMPONENT: <EditUserPage />,
  },
}
