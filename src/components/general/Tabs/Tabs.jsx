import './Tabs.scss'
import { classNames } from 'utils'
import { useNavigate, useLocation } from 'react-router-dom'

const checkLocation = (pathname, navigateTo) => pathname.includes(navigateTo)

export default function Tabs(data) {
  const { children, className, buttons } = data

  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className={classNames('tabs', [className])}>
      <div className="tabs__row">
        {buttons &&
          buttons.map((button) => (
            <button
              key={button.to}
              className={classNames(
                'tabs__button',
                checkLocation(pathname, button.to)
                  ? ['tabs__button_active']
                  : ''
              )}
              disabled={checkLocation(pathname, button.to)}
              onClick={() => navigate(button.to, { state: button.data })}
            >
              {button.text}
            </button>
          ))}
      </div>
      {children && <div className="tabs__content"></div>}
    </div>
  )
}
