import styles from './FilterModal.module.scss'
import React from 'react'

import { Group } from './'

import { OBJECT_TYPES } from 'core/constants'
import { classNames } from 'core/utils'

export default function Show({ visibleObjects, onFilter }) {
  const checkActive = (key) => visibleObjects.indexOf(key) != -1

  return (
    <Group title="Объекты">
      <div className={styles.filter}>
        {Object.keys(OBJECT_TYPES).map((KEY) => (
          <div
            key={KEY}
            className={classNames(styles.filter__item, [
              checkActive(KEY) && 'active',
            ])}
            onClick={() => onFilter(checkActive, KEY)}
          >
            {OBJECT_TYPES[KEY].PLURAL_VALUE}
          </div>
        ))}
      </div>
    </Group>
  )
}
