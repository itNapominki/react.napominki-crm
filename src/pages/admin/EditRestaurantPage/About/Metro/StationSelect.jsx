import styles from './Metro.module.scss'
import React from 'react'

import { AdminForm } from 'components'

import { useErrors } from 'hooks'
import { useSearch } from './hooks'

export default function StationSelect({ name, title, onChange, errors }) {
  const [searchValue, setSearchValue] = React.useState('')
  const stations = useSearch(searchValue)

  const error = useErrors(errors, name)

  return (
    <AdminForm.Control
      type="SELECT"
      containerTag="div"
      label="Название станции"
      name={name}
      search={{ value: searchValue, setValue: setSearchValue }}
      options={stations.map(({ title }) => ({ text: title, value: title }))}
      value={title}
      onChange={onChange}
      error={{ text: error, down: true }}
      className={styles.name}
    />
  )
}
