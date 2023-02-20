import styles from './Layout.module.scss'
import React from 'react'
import { api, classNames } from 'core/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from 'core/store'
import { UserHeader } from './components'

export default function Layout({ children, pageClass }) {
  const dispatch = useDispatch()

  React.useEffect(() => {
    api.auth
      .check()
      .then((user) => dispatch(setUser(user)))
      .catch(({ response }) => console.log(response))
  }, [])

  const user = useSelector((state) => state.user.value)

  return (
    <div className={classNames(styles.page, [pageClass])}>
      {user && <UserHeader email={user.email} />}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
