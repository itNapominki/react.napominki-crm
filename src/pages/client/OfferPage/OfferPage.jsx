import styles from './OfferPage.module.scss'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { ClientLayout } from 'components'
import { OfferCard, Spinner } from 'components/general'
import { Map } from './components'

import { ClientOfferContext } from 'core/context'
import { useGetData } from './hooks'
import { decrypt } from 'core/utils'

export default function OfferPage() {
  const { hash } = useLocation()
  const decrypted = JSON.parse(decrypt(hash.replace('#', '')))

  const [restaurants] = useGetData(decrypted)

  const points = restaurants?.map(({ id, point }) => ({
    id,
    coordinates: point.coordinates,
  }))

  return (
    <ClientOfferContext.Provider value={{ restaurants, decrypted }}>
      <ClientLayout manager={undefined}>
        <div className={styles.title}>Эти заведения вам подходят:</div>

        <Spinner show={!restaurants} />

        {restaurants && (
          <React.Fragment>
            <Map points={points} />

            {restaurants.map((restaurant) => (
              <OfferCard
                key={restaurant.id}
                hall={restaurant}
                className={styles.card}
              />
            ))}
          </React.Fragment>
        )}
      </ClientLayout>
    </ClientOfferContext.Provider>
  )
}
