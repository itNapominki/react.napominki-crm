import React from 'react'

import { HandySvg } from 'handy-svg'

import whatsappIcon from 'sprites/whatsapp.svg'
import telegramIcon from 'sprites/telegram.svg'
import viberIcon from 'sprites/viber.svg'

export default function Offer({ title }) {
  return (
    <div className="cm-restaurant__offer">
      {title && (
        <div className="cm-restaurant__subtitle cm-restaurant__offer-title">
          {title}
        </div>
      )}
      <div className="cm-restaurant__offer-social">
        <div className="cm-restaurant__offer-social-row">
          <SocialItem url="#" messenger="WhatsApp" icon={whatsappIcon} />
          <SocialItem url="#" messenger="Telegram" icon={telegramIcon} />
          <SocialItem url="#" messenger="Viber" icon={viberIcon} />
        </div>
      </div>
    </div>
  )
}

function SocialItem({ url, messenger, icon }) {
  return (
    <a
      href={url}
      className={`cm-restaurant__offer-social-item cm-restaurant__offer-social-item_${messenger.toLowerCase()}`}
    >
      <span className="cm-restaurant__offer-social-icon">
        <HandySvg src={icon} />
      </span>
      <span className="cm-restaurant__offer-social-text">
        Написать в {messenger}
      </span>
    </a>
  )
}
