import styles from './Tools.module.scss'
import React from 'react'

import { FilterModal } from './components'
import { Button, Search } from './'

import { ManagerOfferContext } from 'context'

import iconFilter from 'assets/sprites/filter.svg'

export default function Tools() {
  const { filterVisible, setFilterVisible } =
    React.useContext(ManagerOfferContext)

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.row}>
          <Search />
          <Button icon={iconFilter} onClick={() => setFilterVisible(true)} />
        </div>
      </div>

      {filterVisible && <FilterModal onClose={() => setFilterVisible(false)} />}
    </React.Fragment>
  )
}
