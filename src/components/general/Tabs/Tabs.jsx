import { useState } from 'react'
import { classNames } from '../../../utils'

export default function Tabs(data) {
  const { children, className, buttons } = data
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={classNames('tabs', [className])}>
      <div className="tabs__row">
        {buttons &&
          buttons.map((button, i) => (
            <button
              key={i}
              className={classNames(
                'tabs__button',
                i === activeTab ? ['tabs__button_active'] : ''
              )}
              disabled={i === activeTab ? true : null}
              onClick={() => {
                setActiveTab(i)

                if (button.callback()) {
                  button.callback()
                }
              }}
            >
              {button.text}
            </button>
          ))}
      </div>
      {children && <div className="tabs__content"></div>}
    </div>
  )
}
