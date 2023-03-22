import styles from './Offer.module.scss'
import React from 'react'

import { SocialItem } from './'

import whatsappIcon from 'assets/sprites/whatsapp.svg'
import telegramIcon from 'assets/sprites/telegram.svg'
import viberIcon from 'assets/sprites/viber.svg'

export default function Offer({ card = true, title }) {
  return (
    <div className={card ? styles.card : null}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.socialRow}>
        <SocialItem url="#" messenger="WhatsApp" icon={whatsappIcon} />
        <SocialItem url="#" messenger="Telegram" icon={telegramIcon} />
        <SocialItem url="#" messenger="Viber" icon={viberIcon} />
      </div>
    </div>
  )
}
