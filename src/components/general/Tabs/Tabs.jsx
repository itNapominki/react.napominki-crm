import './Tabs.scss'
import React from 'react'
import { classNames } from 'core/utils'

export default function Tabs({ initial = 0, buttons, children, className }) {
  const [activeIndex, setActiveIndex] = React.useState(initial)

  return (
    <div className={classNames('tabs', [className])}>
      <div className="tabs__row">
        {buttons.map((button, i) => {
          const isActive = activeIndex === i

          function handleClick() {
            setActiveIndex(i)

            if (button.onClick) {
              button.onClick(i)
            }
          }

          return (
            <button
              key={i}
              className={classNames('tabs__button', [
                isActive ? 'tabs__button_active' : '',
              ])}
              disabled={isActive}
              onClick={handleClick}
            >
              {button.text}
            </button>
          )
        })}
      </div>
      {children && <div className="tabs__content">{children}</div>}
    </div>
  )
}
