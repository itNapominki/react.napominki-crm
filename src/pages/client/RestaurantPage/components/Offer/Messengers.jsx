import styles from './Offer.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import whatsapp from 'assets/sprites/whatsapp.svg'
import telegram from 'assets/sprites/telegram.svg'
import viber from 'assets/sprites/viber.svg'

const ICONS = { whatsapp, telegram, viber }

export default function Messengers({ messengers }) {
  const className = (messenger) =>
    `${styles.social__icon} ${
      styles['social__icon_' + messenger.toLowerCase()]
    }`

  return (
    <div className={styles.social}>
      {Object.keys(messengers).map((messenger) => (
        <a
          key={messenger}
          href={messengers[messenger]}
          className={styles.social__item}
          target="_blank"
        >
          <span className={className(messenger)}>
            <HandySvg src={ICONS[messenger]} />
          </span>
          <span className={styles.social__text}>Написать в {messenger}</span>
        </a>
      ))}
    </div>
  )
}
