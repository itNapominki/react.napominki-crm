import styles from './Restaurant.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { Separator } from 'components'

import { handleAdd, handleRemove } from './handlers'

import idIcon from 'assets/sprites/id.svg'
import markerIcon from 'assets/sprites/marker.svg'
import cafeIcon from 'assets/sprites/cafe.svg'

import { EditRelatedRestaurantsContext } from 'core/context'
import { addressToString } from 'core/utils'

export default React.memo(function Restaurant({ restaurant }) {
  const { id, title, address } = restaurant
  const { region, city, county, district, stress, house } = address
  const { relatedRestaurants, setRelatedRestaurants } = React.useContext(
    EditRelatedRestaurantsContext
  )

  const isRelated = relatedRestaurants.find(
    (restaurant) => id === restaurant.id
  )

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.icon}>
          <HandySvg src={idIcon} />
        </div>
        <div className={styles.text}>{id}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon}>
          <HandySvg src={cafeIcon} />
        </div>
        <div className={styles.text}>{title}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon}>
          <HandySvg src={markerIcon} />
        </div>
        <div className={styles.text}>
          {addressToString({ region, city, county, district, stress, house })}
        </div>
      </div>

      <button
        className={`${styles.button} ${isRelated ? '_remove' : '_add'}`}
        onClick={() =>
          isRelated
            ? handleRemove(setRelatedRestaurants, id)
            : handleAdd(setRelatedRestaurants, restaurant)
        }
      >
        {isRelated ? 'Убрать' : 'Добавить'}
      </button>

      <Separator />
    </div>
  )
})
