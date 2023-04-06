import styles from './UserLayout.module.scss'
import React from 'react'
import { useSelector } from 'react-redux'

import { Tabs } from 'components'
import { Header, Navigation } from './'

export default function UserLayout({
  children,
  containerClassName,
  roles = [],
  navigation,
}) {
  const user = useSelector((state) => state.user.value)
  const allowed = user && roles.indexOf(user.role) !== -1

  return (
    <React.Fragment>
      <Header user={user} />
      {user && <Navigation />}
      <div className={styles.page}>
        <div className="wrapper">
          {allowed ? (
            <React.Fragment>
              {navigation && <Tabs buttons={navigation} />}
              <div className={styles[containerClassName]}>{children}</div>
            </React.Fragment>
          ) : (
            <div className={styles.forbidden}>Нет доступа</div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
