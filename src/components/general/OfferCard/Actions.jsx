import styles from './OfferCard.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

import { ManagerOfferContext } from 'core/context'

export default function Actions({ mode, id, cardUrl }) {
  const { handle, setOffer, setModalFor } =
    mode === 'MANAGER' && React.useContext(ManagerOfferContext)

  return (
    <div className={styles.actions}>
      {mode === 'MANAGER' ? (
        <React.Fragment>
          <button onClick={() => setModalFor(id)}>Открыть карточку</button>
          <button onClick={() => handle.remove(id, setOffer)}>
            Убрать из предложения
          </button>
        </React.Fragment>
      ) : (
        <Link to={cardUrl}>Смотреть подробно</Link>
      )}
    </div>
  )
}
