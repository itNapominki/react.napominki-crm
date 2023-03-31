import styles from './ClientHeader.module.scss'
import React from 'react'

import { Messengers } from './'

export default function ClientHeader({ manager }) {
  const { firstName, phone, messengers } = manager

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

          {phone && (
            <div className={styles.manager}>
              {firstName} — <a href={`tel:${phone}`}>{phone}</a>
            </div>
          )}

          <Messengers messengers={messengers} />

          {/* <Button
            mode="light"
            text="Заказать звонок"
            className={styles.callback}
          /> */}
        </div>
      </div>
    </div>
  )
}
