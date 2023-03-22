import styles from './Offer.module.scss'
import React from 'react'

import { ManagerOfferContext } from 'core/context'
import { ROUTES } from 'router/routes'
import { setHash } from './utils'

export default function Info() {
  const { offer, handle } = React.useContext(ManagerOfferContext)

  const hash = setHash(offer)
  const url =
    offer.length > 0
      ? window.location.origin + ROUTES.OFFER.PATH + '#' + hash
      : null

  async function handleCopy() {
    await navigator.clipboard
      .writeText(url)
      .then(() => alert('Предложение скопировано'))
  }

  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <div className={styles.title}>Предложение</div>
        {url && (
          <button className={styles.clear} onClick={handle.clear}>
            Очистить
          </button>
        )}
      </div>

      {url && (
        <div className={styles.link} onClick={handleCopy}>
          <span>{url}</span>
        </div>
      )}
    </div>
  )
}
