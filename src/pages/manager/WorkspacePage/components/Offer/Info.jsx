import styles from './Offer.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { ManagerOfferContext } from 'context'
import { ROUTES } from 'router/routes'
import { classNames, encrypt } from 'utils'
import { handleShort } from './handlers'

import iconCopy from 'assets/sprites/copy.svg'

export default function Info() {
  const { offer, handle } = React.useContext(ManagerOfferContext)

  const [url, setUrl] = React.useState('')
  const hash = React.useMemo(() => encrypt(JSON.stringify(offer)), [offer])

  React.useEffect(() => {
    setUrl(window.location.origin + ROUTES.OFFER.PATH + '#' + hash)
  }, [hash])

  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => setCopied(false), [url])

  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <div className={styles.title}>Предложение</div>
        <button
          className={styles.short}
          onClick={() => handleShort(url, setUrl)}
        >
          Сократить
        </button>
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
