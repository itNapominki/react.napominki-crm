import styles from './UserLayout.module.scss'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setUser } from 'store'
import { Button } from 'components'
import { classNames } from 'utils'
import { ROUTES } from 'router/routes'

export default function UserHeader({ user }) {
  const { pathname } = useLocation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.setItem('token', null)
    dispatch(setUser(null))
    navigate('/auth')
  }

  return (
    user && (
      <div
        className={classNames(styles.header, [
          pathname !== ROUTES.WORKSPACE.PATH && styles.offset,
        ])}
      >
        <div className="wrapper">
          <div className={styles.row}>
            <div className={styles.email}>{user.email}</div>
            <Button
              text="Выйти"
              className={styles.button}
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    )
  )
}
