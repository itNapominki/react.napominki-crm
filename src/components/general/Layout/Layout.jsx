import styles from './Layout.module.scss'
import React from 'react'
import { useDispatch } from 'react-redux'

import { UserLayout } from './components'

import { classNames } from 'core/utils'
import { setUser } from 'core/store'
import { api } from 'core/utils'

export default function Layout({ children, pageClass }) {
  const dispatch = useDispatch()

  React.useEffect(() => {
    api.auth.check().then((user) => dispatch(setUser(user)))
    // .catch(({ response }) => console.log(response))
  }, [])

  return <div className={classNames(styles.page, [pageClass])}>{children}</div>
}

Layout.UserLayout = UserLayout
