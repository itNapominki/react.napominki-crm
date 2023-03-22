import styles from './OfferCard.module.scss'
import React from 'react'

import { ManagerOfferContext, ClientOfferContext } from 'core/context'
import { ROUTES } from 'router/routes'
import { encrypt } from 'core/utils'

export default function Actions({ mode, id }) {
  const { handle, setOffer, setModalFor } =
    mode === 'MANAGER' && React.useContext(ManagerOfferContext)

  const { decrypted } =
    mode === 'CLIENT' && React.useContext(ClientOfferContext)

  const { halls, menus } =
    mode === 'CLIENT' && decrypted.find((restaurant) => restaurant.id === id)

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
        <a
          href={[
            ROUTES.RESTAURANT.PATH.replace(':id', id),
            encrypt(JSON.stringify({ halls, menus })),
          ].join('#')}
          target="_blank"
        >
          Смотреть подробно
        </a>
      )}
    </div>
  )
}
