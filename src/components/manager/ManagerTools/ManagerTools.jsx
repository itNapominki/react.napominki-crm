import styles from './ManagerTools.module.scss'
import React from 'react'
import { Input, ContentCard } from 'components/general'

export default function ManagerTools() {
  return (
    <ContentCard>
      <div className={styles.tools}>
        <Input label="Поиск" bigLabel className={styles.search} />
      </div>
    </ContentCard>
  )
}
