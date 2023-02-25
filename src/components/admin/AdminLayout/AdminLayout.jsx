import styles from './AdminLayout.module.scss'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import {
  Layout,
  Tabs,
  Forbidden,
  ContentCard,
  Spinner,
} from 'components/general'
import { UserHeader } from './components'

import { USER_ROLES } from 'core/constants'
import { setUser } from 'core/store'
import { api } from 'core/utils'
import { useNavigation } from './hooks'

export default function AdminLayout({ children, fetching }) {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  const [navigation, addButton] = useNavigation()

  React.useEffect(() => {
    api.auth
      .check()
      .then((user) => dispatch(setUser(user)))
      .catch(({ response }) => console.log(response))
  }, [])

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
    (user.role !== USER_ROLES.ADMIN.VALUE && show === 'users') ||
    (user.role !== USER_ROLES.ADMIN.VALUE &&
      user.role !== USER_ROLES.REDAKTOR.VALUE)
  ) {
    return <Forbidden />
  }

  return (
    <Layout>
      <UserHeader email={user.email} />
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
