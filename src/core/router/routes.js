import { OfferPage, RestaurantPage } from 'pages/client'
import { WorkspacePage } from 'pages/manager'
import {
  AuthPage,
  AdminPage,
  EditObjectPage,
  EditRestaurantPage,
  EditUserPage,
} from 'pages/admin'

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
    COMPONENT: <AdminPage />,
  },

  ADMIN_RESTAURANTS: {
    PATH: '/admin/restaurants',
    COMPONENT: <AdminPage />,
  },

  ADMIN_USERS: {
    PATH: '/admin/users',
    COMPONENT: <AdminPage />,
  },

  ADMIN_ADD_OBJECT: {
    PATH: '/admin/objects/add',
    COMPONENT: <EditObjectPage />,
  },

  ADMIN_ADD_RESTAURANT: {
    PATH: '/admin/restaurants/add',
    COMPONENT: <EditRestaurantPage />,
  },

  ADMIN_ADD_USER: {
    PATH: '/admin/users/add',
    COMPONENT: <EditUserPage />,
  },

  ADMIN_EDIT_OBJECT: {
    PATH: '/admin/objects/edit/:id',
    COMPONENT: <EditObjectPage />,
  },

  ADMIN_EDIT_RESTAURANT: {
    PATH: '/admin/restaurants/edit/:id',
    COMPONENT: <EditRestaurantPage />,
  },

  ADMIN_EDIT_USER: {
    PATH: '/admin/users/edit/:id',
    COMPONENT: <EditUserPage />,
  },
}
