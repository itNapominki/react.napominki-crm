import styles from './AdminLayout.module.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import {
  Layout,
  Tabs,
  Forbidden,
  ContentCard,
  Spinner,
} from 'components/general'

import { USER_ROLES } from 'core/constants'
import { useNavigation } from './hooks'
import { getObjKeyName } from 'core/utils'

export default function AdminLayout({ children, fetching }) {
  const { pathname } = useLocation()
  const user = useSelector((state) => state.user.value)

  const [navigation, addButton] = useNavigation()

  if (user && user.role === USER_ROLES.REDAKTOR.VALUE) {
    navigation.shift()
  }

  const show = pathname
    .split('/')
    .filter((part) => part !== '')
    .pop()

  const activeTab = navigation.findIndex(
    ({ route }) => route.split('/').pop() === show
  )
  if (
    !user ||
    (user.role !== getObjKeyName(() => USER_ROLES.ADMIN) && show === 'users') ||
    (user.role !== getObjKeyName(() => USER_ROLES.ADMIN) &&
      user.role !== getObjKeyName(() => USER_ROLES.REDAKTOR))
  ) {
    return <Forbidden />
  }

  return (
    <Layout>
      <div className="wrapper">
        <Tabs buttons={navigation} initial={activeTab} />
        <ContentCard className={styles.card}>
          <Link className={styles.addButton} to={addButton[show].route}>
            {addButton[show].text}
          </Link>
          {children}
          {fetching && <Spinner show={fetching} className={styles.spinner} />}
        </ContentCard>
      </div>
    </Layout>
  )
}
