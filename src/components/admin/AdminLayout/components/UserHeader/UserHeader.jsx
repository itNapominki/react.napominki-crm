import styles from './UserHeader.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setUser } from 'core/store'
import { useDispatch } from 'react-redux'
import { Button } from 'components'

export default function UserHeader({ email }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.setItem('token', null)
    dispatch(setUser(null))
    navigate('/auth')
  }

  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.email}>{email}</div>
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
