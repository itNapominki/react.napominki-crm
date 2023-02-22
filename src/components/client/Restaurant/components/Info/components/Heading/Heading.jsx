import React from 'react'
import { HandySvg } from 'handy-svg'
import { RestaurantContext } from 'core/context'
import { addressToString } from 'core/utils'

import styles from './Heading.module.scss'

import cafeIcon from 'assets/sprites/cafe.svg'
import markerIcon from 'assets/sprites/marker.svg'
import metroIcon from 'assets/sprites/metro.svg'

export default function Heading() {
  const context = React.useContext(RestaurantContext)

  const { address, clientInfo, title, cardTitle } = context
  const { relatedMetro, shedule } = clientInfo

  return (
    <React.Fragment>
      <div className={styles.title}>{cardTitle}</div>
      <div className={styles.location}>
        <div className={styles.locationItem}>
          <div className={styles.locationIcon}>
            <HandySvg src={cafeIcon} />
          </div>
          <div>{title}</div>
        </div>
        <div className={styles.locationItem}>
          <div className={styles.locationIcon}>
            <HandySvg src={markerIcon} />
          </div>
          <div>{addressToString({ ...address })}</div>
        </div>
        {relatedMetro.length > 0 && (
          <div className={styles.locationItem}>
            <div className={styles.locationIcon}>
              <HandySvg src={metroIcon} />
            </div>
            <div>
              {relatedMetro
                .map(({ title, distance }) => {
                  const text = [title, distance.replace('0 км. ', '')].join(' ')

                  return text
                })
                .join(', ')}
            </div>
          </div>
        )}
        {shedule.length > 0 && (
          <div className={styles.locationItem}>
            <div className={styles.locationIcon}>
              <HandySvg src={metroIcon} />
            </div>
            <div>
              {shedule.map((shedule) => {
                const days =
                  shedule.days.length === 7
                    ? 'Ежедневно'
                    : shedule.days.map(({ short }) => short).join(', ')

                const time = 'с ' + shedule.time.replace('-', 'до')

                return [days, time].join(' ')
              })}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
