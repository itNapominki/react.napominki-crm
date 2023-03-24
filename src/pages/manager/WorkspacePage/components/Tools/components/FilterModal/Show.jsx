import styles from './FilterModal.module.scss'
import React from 'react'

import { OBJECT_TYPES } from 'core/constants'
import { classNames } from 'core/utils'
import { ManagerOfferContext } from 'core/context'

export default function Show() {
  const { visibleObjects, setVisibleObjects } =
    React.useContext(ManagerOfferContext)

  const checkActive = (key) => visibleObjects.indexOf(key) != -1

  function handleClick(key) {
    setVisibleObjects((prev) =>
      checkActive(key)
        ? prev.filter((objectType) => objectType !== key)
        : [...prev, key]
    )
  }

  return (
    <div className={styles.filter}>
      {Object.keys(OBJECT_TYPES).map((KEY) => (
        <div
          key={KEY}
          className={classNames(styles.filter__item, [
            checkActive(KEY) && 'active',
          ])}
          onClick={() => handleClick(KEY)}
        >
          {OBJECT_TYPES[KEY].PLURAL_VALUE}
        </div>
      ))}
    </div>
  )
}
