import styles from './UserLayout.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setUser } from 'core/store'
import { Button } from 'components'

export default function UserHeader({ user }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.setItem('token', null)
    dispatch(setUser(null))
    navigate('/auth')
  }

  return (
    <div className={styles.header}>
      <div className="wrapper">
        <div className={styles.row}>
          {user && <div className={styles.email}>{user.email}</div>}
          <Button
            text="Выйти"
            className={styles.button}
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  )
}
