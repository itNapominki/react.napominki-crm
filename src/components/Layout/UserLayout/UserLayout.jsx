import styles from './UserLayout.module.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Tabs } from 'components'
import { Header, Navigation } from './'

import { useRoles } from './hooks'

export default function UserLayout({ navigation }) {
  const user = useSelector((state) => state.user.value)
  const [allowed, setRoles] = useRoles(user)

  return (
    <React.Fragment>
      <Header user={user} />
      {user && <Navigation role={user && user.role} />}
      <div className={user && styles.offset}>
        <div className="wrapper">
          {allowed === false ? (
            <div className={styles.forbidden}>Нет доступа</div>
          ) : (
            <React.Fragment>
              {navigation && <Tabs buttons={navigation} />}
              {<Outlet context={{ setRoles }} />}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
