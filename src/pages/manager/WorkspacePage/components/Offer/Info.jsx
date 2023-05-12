import styles from './Offer.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { ManagerOfferContext } from 'context'
import { ROUTES } from 'router/routes'
import { classNames, encrypt } from 'utils'
import { handleCopy } from './handlers'

import iconCopy from 'assets/sprites/copy.svg'

export default function Info() {
  const { offer, handle } = React.useContext(ManagerOfferContext)

  const hash = React.useMemo(() => encrypt(JSON.stringify(offer)), [offer])
  const url = window.location.origin + ROUTES.OFFER.PATH + '#' + hash

  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => setCopied(false), [url])

  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <div className={styles.title}>Предложение</div>
        <button className={styles.clear} onClick={handle.clear}>
          Очистить
        </button>
      </div>

      <div className={styles.url}>
        <button
          className={classNames(styles.url__copy, [
            copied && styles.url__copy_success,
          ])}
          onClick={(e) => handleCopy(e, url, setCopied)}
        >
          <HandySvg src={iconCopy} />
        </button>
        <div className={styles.url__link}>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
      </div>
    </div>
  )
}
