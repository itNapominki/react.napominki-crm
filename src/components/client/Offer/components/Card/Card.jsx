import React from 'react'
import { Link } from 'react-router-dom'
import { HandySvg } from 'handy-svg'
import { ClientCard, List, Separator } from 'components'
import { addressToString } from 'core/utils'

import styles from './Card.module.scss'

import cafeIcon from 'assets/sprites/cafe.svg'
import markerIcon from 'assets/sprites/marker.svg'
import metroIcon from 'assets/sprites/metro.svg'

export default function Card({ restaurant, managerId }) {
  const { id, address, preview, cardTitle, title, clientInfo } = restaurant

  const { info } = clientInfo

  const addressStr = addressToString([
    address.city,
    address.county,
    address.district,
    address.street,
    address.house,
  ])

  return (
    <ClientCard>
      <div className={styles.row}>
        <img
          className={styles.image}
          src={process.env.REACT_APP_SERVER_URL + '/images/' + preview}
          alt=""
        />
        <div className={styles.content}>
          <div className={styles.title}>{cardTitle}</div>
          <Separator />
          <div className={styles.location}>
            <div className={styles.locationItem}>
              <div className={styles.locationIcon}>
                <HandySvg src={cafeIcon} />
              </div>
              {title}
            </div>
            <div className={styles.locationItem}>
              <div className={styles.locationIcon}>
                <HandySvg src={markerIcon} />
              </div>
              {addressStr}
            </div>
            <div className={styles.locationItem}>
              <div className={styles.locationIcon}>
                <HandySvg src={metroIcon} />
              </div>
              {title}
            </div>
          </div>
          <Separator />
          {info.length > 0 && (
            <React.Fragment>
              <List className={styles.list} list={info} />
              <Separator />
            </React.Fragment>
          )}
          <Link
            to={'/restaurant/' + id + '/?manager_id=' + managerId}
            className={styles.link}
          >
            Смотреть подробно
          </Link>
        </div>
      </div>
    </ClientCard>
  )
}
