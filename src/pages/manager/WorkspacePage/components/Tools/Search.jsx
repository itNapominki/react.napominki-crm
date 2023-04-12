import styles from './Tools.module.scss'
import React from 'react'

import { Droplist, AdminForm } from 'components'

import { ManagerOfferContext } from 'core/context'

export default function Search() {
  const { setSearch, searched, searchedVisible, setSearchedVisible } =
    React.useContext(ManagerOfferContext)

  return (
    <div className={styles.search}>
      <AdminForm.Control
        label={{ text: 'Поиск по ресторанам', size: 'big' }}
        onInput={setSearch}
        onFocus={() => searched.length > 0 && setSearchedVisible(true)}
      />
      <Droplist
        visible={searchedVisible}
        setVisible={setSearchedVisible}
        items={searched}
        className={styles.search__droplist}
      />
    </div>
  )
}
