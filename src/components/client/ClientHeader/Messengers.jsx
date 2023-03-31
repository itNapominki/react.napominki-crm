import styles from './ClientHeader.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import whatsapp from 'assets/sprites/whatsapp.svg'
import telegram from 'assets/sprites/telegram.svg'
import viber from 'assets/sprites/viber.svg'

const ICONS = { whatsapp, telegram, viber }

const className = (messenger) => {
  return `${styles.social__item} ${
    styles['social__item_' + messenger.toLowerCase()]
  }`
}

export default function Messengers({ messengers = [] }) {
  const getShow = (messenger) => messengers[messenger].length > 0

  const array = Object.keys(messengers)
  const show = array.filter((messenger) => getShow(messenger)).length > 0

  if (!show) {
    return
  }

  return (
    <div className={styles.social}>
      <div className={styles.social__row}>
        {array.map(
          (messenger) =>
            getShow(messenger) && (
              <a
                key={messenger}
                href={messengers[messenger]}
                className={className(messenger)}
                target="_blank"
              >
                <HandySvg src={ICONS[messenger]} />
              </a>
            )
        )}
      </div>
    </div>
  )
}
