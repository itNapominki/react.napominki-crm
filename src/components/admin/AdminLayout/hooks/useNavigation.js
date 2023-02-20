import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'router/routes'

export default function useNavigation() {
  const navigate = useNavigate()

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

  const addButton = {
    users: {
      text: 'Добавить пользователя',
      route: ROUTES.ADMIN_CREATE_USER.PATH,
    },
    restaurants: {
      text: 'Добавить ресторан',
      route: ROUTES.ADMIN_CREATE_RESTAURANT.PATH,
    },
    objects: {
      text: 'Добавить объект',
      route: ROUTES.ADMIN_CREATE_OBJECT.PATH,
    },
  }

  return [navigation, addButton]
}
