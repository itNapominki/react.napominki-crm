import styles from './AdminData.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { ContentCard } from 'components/general'
import { Objects, Restaurants, Users } from './components'
import { ROUTES } from 'core/router/routes'

export default function AdminData({ show }) {
  const data = {
    users: {
      Component: <Users />,
      buttonText: 'Добавить пользователя',
      route: ROUTES.ADMIN_ADD_USER.PATH,
    },
    restaurants: {
      Component: <Restaurants />,
      buttonText: 'Добавить ресторан',
      route: ROUTES.ADMIN_ADD_RESTAURANT.PATH,
    },
    objects: {
      Component: <Objects />,
      buttonText: 'Добавить объект',
      route: ROUTES.ADMIN_ADD_OBJECT.PATH,
    },
  }

  return (
    <ContentCard className={styles.card}>
      <Link className={styles.addButton} to={data[show].route}>
        {data[show].buttonText}
      </Link>

      {data[show].Component}
    </ContentCard>
  )
}
