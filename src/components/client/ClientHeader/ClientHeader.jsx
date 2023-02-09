import React from 'react'
import { HandySvg } from 'handy-svg'
import { Button } from 'components'

import styles from './ClientHeader.module.scss'

import whatsappIcon from 'sprites/whatsapp.svg'
import telegramIcon from 'sprites/telegram.svg'
import viberIcon from 'sprites/viber.svg'

const socialClassName = (messenger) => {
  return `${styles.socialItem} ${
    styles['socialItem_' + messenger.toLowerCase()]
  }`
}

export default function ClientHeader({ manager }) {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.row}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="" />
          </div>
          <div className={styles.descriptor}>
            Организация поминок <br></br>в&nbsp;Москве и&nbsp;области
            с&nbsp;2010&nbsp;г.
          </div>

          {manager && (
            <div className={styles.manager}>
              {manager.firstName} — {manager.phone}
            </div>
          )}

          <div className={styles.social}>
            <a href="#" className={socialClassName('whatsapp')}>
              <HandySvg src={whatsappIcon} />
            </a>
            <a href="#" className={socialClassName('telegram')}>
              <HandySvg src={telegramIcon} />
            </a>
            <a href="#" className={socialClassName('viber')}>
              <HandySvg src={viberIcon} />
            </a>
          </div>

          <Button
            mode="light"
            text="Заказать звонок"
            className={styles.callback}
          />
        </div>
      </div>
    </div>
  )
}
