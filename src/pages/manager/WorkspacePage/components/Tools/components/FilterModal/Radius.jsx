import styles from './FilterModal.module.scss'
import React from 'react'

import { Input } from 'components'
import { Group } from './'

import { ManagerOfferContext } from 'context'
import { handleAdd, handleInput } from './handlers/radiusFilter'

export default function Radius() {
  const {
    setFilterVisible,
    radiusFilter: { radius = '' },
    setRadiusFilter,
  } = React.useContext(ManagerOfferContext)

  return (
    <Group title="Фильтр по радиусу, м.">
      <Input
        type="tel"
        value={radius}
        // mask={['9{1,10} м.']}
        onInput={(value) => handleInput(setRadiusFilter, value)}
      />
      <div className={styles.radiusButtons}>
        <button
          onClick={() => handleAdd(setRadiusFilter, setFilterVisible, radius)}
        >
          Поставить точку
        </button>
        <button onClick={() => setRadiusFilter({})}>
          Отменить фильтр по радиусу
        </button>
      </div>
    </Group>
  )
}
