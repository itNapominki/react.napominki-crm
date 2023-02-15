import './AdminHeader.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setUser } from 'core/store'
import { useDispatch } from 'react-redux'
import { Button } from 'components'

export default function AdminHeader({ userEmail }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.setItem('token', null)
    dispatch(setUser(null))
    navigate('/auth')
  }

  return (
    <div className="admin-header">
      <div className="wrapper">
        <div className="admin-header__row">
          <div className="admin-header__user">{userEmail}</div>
          <Button
            text="Выйти"
            className="admin-header__button"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  )
}
