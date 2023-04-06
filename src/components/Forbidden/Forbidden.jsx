import styles from './Forbidden.module.scss'
import React from 'react'
import { Layout } from 'components/general'

export default function Forbidden() {
  return (
    <Layout>
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.title}>Нет доступа</div>
        </div>
      </div>
    </Layout>
  )
}
