import './ClientHeader.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'
import { Button } from 'components'

import whatsappIcon from 'sprites/whatsapp.svg'
import telegramIcon from 'sprites/telegram.svg'
import viberIcon from 'sprites/viber.svg'

export default function ClientHeader(data) {
  const { manager } = data

  return (
    <div className="client-header">
      <div className="wrapper">
        <div className="client-header__row">
          <div className="client-header__logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="client-header__descriptor">
            Организация поминок <br></br>в&nbsp;Москве и&nbsp;области
            с&nbsp;2010&nbsp;г.
          </div>

          {manager && (
            <div className="client-header__manager">
              {manager.name} — {manager.phone}
            </div>
          )}

          <div className="client-header__social">
            <div className="client-header__social-row">
              <a
                href="#"
                className="client-header__social-item client-header__social-item_whatsapp"
              >
                <HandySvg src={whatsappIcon} />
              </a>
              <a
                href="#"
                className="client-header__social-item client-header__social-item_telegram"
              >
                <HandySvg src={telegramIcon} />
              </a>
              <a
                href="#"
                className="client-header__social-item client-header__social-item_viber"
              >
                <HandySvg src={viberIcon} />
              </a>
            </div>
          </div>

          <Button
            mode="light"
            text="Заказать звонок"
            className="client-header__callback"
          />
        </div>
      </div>
    </div>
  )
}
