import styles from './Forbidden.module.scss'
import React from 'react'
import { ContentCard, Layout } from 'components/general'

export default function Forbidden() {
  return (
    <Layout>
      <div className="wrapper">
        <ContentCard>
          <div className={styles.title}>Нет доступа</div>
        </ContentCard>
      </div>
    </Layout>
  )
}
