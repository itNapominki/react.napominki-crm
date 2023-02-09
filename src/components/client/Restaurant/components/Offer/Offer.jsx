import React from 'react'
import { HandySvg } from 'handy-svg'

import styles from './Offer.module.scss'

import whatsappIcon from 'sprites/whatsapp.svg'
import telegramIcon from 'sprites/telegram.svg'
import viberIcon from 'sprites/viber.svg'

export default function Offer({ title }) {
  return (
    <React.Fragment>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.socialRow}>
        <SocialItem url="#" messenger="WhatsApp" icon={whatsappIcon} />
        <SocialItem url="#" messenger="Telegram" icon={telegramIcon} />
        <SocialItem url="#" messenger="Viber" icon={viberIcon} />
      </div>
    </React.Fragment>
  )
}

function SocialItem({ url, messenger, icon }) {
  const iconClassNames = `${styles.socialIcon} ${
    styles['socialIcon_' + messenger.toLowerCase()]
  }`

  return (
    <a href={url} className={styles.socialItem}>
      <span className={iconClassNames}>
        <HandySvg src={icon} />
      </span>
      <span className={styles.socialItemText}>Написать в {messenger}</span>
    </a>
  )
}
