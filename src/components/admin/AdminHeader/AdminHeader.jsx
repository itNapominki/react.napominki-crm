import Button from '../../general/Button/Button'

export default function AdminHeader(data) {
  const { userEmail } = data

  return (
    <div className="admin-header">
      <div className="wrapper">
        <div className="admin-header__row">
          <div className="admin-header__user">{userEmail}</div>
          <Button text="Выйти" className="admin-header__button" />
        </div>
      </div>
    </div>
  )
}
