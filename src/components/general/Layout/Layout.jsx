import styles from './Layout.module.scss'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { UserHeader } from './components'

import { classNames } from 'core/utils'
import { setUser } from 'core/store'
import { api } from 'core/utils'

export default function Layout({ children, pageClass }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  console.log(2)

  React.useEffect(() => {
    api.auth
      .check()
      .then((user) => dispatch(setUser(user)))
      .catch(({ response }) => console.log(response))
  }, [])

  return (
    <div className={classNames(styles.page, [pageClass])}>
      {user && <UserHeader email={user.email} />}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
