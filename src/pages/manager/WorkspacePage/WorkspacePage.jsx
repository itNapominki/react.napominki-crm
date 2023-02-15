import styles from './WorkspacePage.module.scss'
import React from 'react'
import { AdminLayout, Input } from 'components'
import { ContentCard } from 'components/general'

export default function WorkspacePage() {
  return (
    <AdminLayout>
      <ContentCard>
        <div className={styles.tools}>
          <Input label="Поиск" bigLabel className={styles.search} />
        </div>
      </ContentCard>
    </AdminLayout>
  )
}
