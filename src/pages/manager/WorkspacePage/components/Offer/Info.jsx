import styles from './Offer.module.scss'
import React from 'react'

import { ManagerOfferContext } from 'core/context'
import { ROUTES } from 'router/routes'
import { encrypt } from 'core/utils'

export default function Info() {
  const { offer, handle } = React.useContext(ManagerOfferContext)

  const hash = encrypt(JSON.stringify(offer))
  const url = window.location.origin + ROUTES.OFFER.PATH + '#' + hash

  // async function handleCopy(e) {
  //   e.preventDefault()

  //   await navigator.clipboard
  //     .writeText(url)
  //     .then(() => alert('Предложение скопировано'))
  // }

  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <div className={styles.title}>Предложение</div>
        <button className={styles.clear} onClick={handle.clear}>
          Очистить
        </button>
      </div>

      <div className={styles.link}>
        <a href={url} target="_blank">
          {url}
        </a>
      </div>
    </div>
  )
}
