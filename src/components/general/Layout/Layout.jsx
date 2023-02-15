import styles from './Layout.module.scss'
import { classNames } from 'core/utils'
import { useSelector } from 'react-redux'
import { UserHeader } from './components'

export default function Layout({ children, pageClass }) {
  const user = useSelector((state) => state.user.value)

  return (
    <div className={classNames(styles.page, [pageClass])}>
      {user && <UserHeader email={user.email} />}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
