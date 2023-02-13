import './AdminHeader.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'components'
import { setUser } from 'reducers'
import { Api } from 'utils'

export default function AdminHeader() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.user.value)

  React.useEffect(() => {
    Api.auth.check().then((user) => {
      dispatch(setUser(user))
    })
  }, [])

  function handleLogout() {
    localStorage.setItem('token', null)
    dispatch(setUser(null))
    navigate('/auth')
  }

  return (
    user && (
      <div className="admin-header">
        <div className="wrapper">
          <div className="admin-header__row">
            <div className="admin-header__user">{user.email}</div>
            <Button
              text="Выйти"
              className="admin-header__button"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    )
  )
}
