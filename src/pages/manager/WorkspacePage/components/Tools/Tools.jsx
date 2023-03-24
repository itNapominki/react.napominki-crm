import styles from './Tools.module.scss'
import React from 'react'

import { Input } from 'components/general'
import { FilterModal } from './components'
import { Button } from './'

import iconFilter from 'assets/sprites/filter.svg'

export default function Tools() {
  const [filterVisible, setFilterVisible] = React.useState(false)

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.row}>
          <Input label="Поиск" bigLabel className={styles.input} />
          <Button icon={iconFilter} onClick={() => setFilterVisible(true)} />
        </div>
      </div>

      {filterVisible && <FilterModal onClose={() => setFilterVisible(false)} />}
    </React.Fragment>
  )
}
