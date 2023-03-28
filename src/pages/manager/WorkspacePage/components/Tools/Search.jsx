import styles from './Tools.module.scss'
import React from 'react'

import { Droplist, Input } from 'components/general'

import { ManagerOfferContext } from 'core/context'

export default function Search() {
  const { setSearch, searched, searchedVisible, setSearchedVisible } =
    React.useContext(ManagerOfferContext)

  return (
    <div className={styles.search}>
      <Input
        label="Поиск"
        bigLabel
        onInput={setSearch}
        onFocus={() => searched.length > 0 && setSearchedVisible(true)}
      />
      <Droplist
        visible={searchedVisible}
        items={searched}
        className={styles.search__droplist}
      />
    </div>
  )
}
