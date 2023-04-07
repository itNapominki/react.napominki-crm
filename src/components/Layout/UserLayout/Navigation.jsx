import styles from './UserLayout.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'
import { Link, useLocation } from 'react-router-dom'

import { ROUTES } from 'router/routes'
import { USER_ROLES } from 'core/constants'
import { classNames, getObjKeyName } from 'core/utils'

import iconUsers from 'assets/sprites/users.svg'
import iconRestaurant from 'assets/sprites/cafe.svg'
import iconObjects from 'assets/sprites/marker.svg'
import iconSettings from 'assets/sprites/settings.svg'

export default function Navigation({ role }) {
  const { pathname } = useLocation()

  const NAVIGATION = [
    {
      TEXT: 'Пользователи',
      ICON: iconUsers,
      PATH: ROUTES.ADMIN.CHILDREN.USERS.PATH,
    },
    {
      TEXT: 'Рестораны',
      ICON: iconRestaurant,
      PATH: ROUTES.ADMIN.CHILDREN.RESTAURANTS.PATH,
    },
    {
      TEXT: 'Объекты',
      ICON: iconObjects,
      PATH: ROUTES.ADMIN.CHILDREN.OBJECTS.PATH,
    },
    {
      TEXT: 'Настройки',
      ICON: iconSettings,
      PATH: ROUTES.ADMIN.CHILDREN.SETTINGS.PATH,
    },
  ]

  if (role === getObjKeyName(() => USER_ROLES.REDAKTOR)) {
    NAVIGATION.shift()
    NAVIGATION.pop()
  }

  return (
    <div className={styles.navigation}>
      {NAVIGATION.map(({ TEXT, ICON, PATH }) => (
        <Link
          key={TEXT}
          to={PATH}
          className={classNames(styles.navigation__item, [
            pathname === PATH && styles.navigation__item_active,
          ])}
        >
          <div className={styles.navigation__itemIcon}>
            <HandySvg src={ICON} />
          </div>
          {TEXT}
        </Link>
      ))}
    </div>
  )
}
