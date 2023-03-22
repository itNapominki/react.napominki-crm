import styles from './Station.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { Input } from 'components/general'

import { handleAdd, handleInput, handleRemove } from './handlers'

import metroIcon from 'assets/sprites/metro.svg'
import removeIcon from 'assets/sprites/remove.svg'

import { EditRelatedMetroContext } from 'core/context'

export default React.memo(function Station({ station }) {
  const { id, title, distance } = station
  const { relatedMetro, setRelatedMetro } = React.useContext(
    EditRelatedMetroContext
  )

  const isRelated = relatedMetro.find((station) => id === station.id)

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.icon}>
          <HandySvg src={metroIcon} />
        </div>
        <div className={styles.title}>{title}</div>

        {isRelated ? (
          <div className={styles.related}>
            <Input
              value={distance}
              mask={['9 км. 999 м.']}
              onInput={(value) => handleInput(setRelatedMetro, id, value)}
            />
            <div
              className={styles.removeButton}
              onClick={() => handleRemove(setRelatedMetro, id)}
            >
              <HandySvg src={removeIcon} />
            </div>
          </div>
        ) : (
          <div
            className={styles.addButton}
            onClick={() => handleAdd(setRelatedMetro, station)}
          >
            Добавить
          </div>
        )}
      </div>
    </div>
  )
})
