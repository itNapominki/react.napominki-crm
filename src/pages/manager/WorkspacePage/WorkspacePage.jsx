import styles from './WorkspacePage.module.scss'
import React from 'react'
import { Layout } from 'components/general'
import { AdminLayout } from 'components/admin'
import { ManagerMap, ManagerTools } from 'components/manager'

export default function WorkspacePage() {
  console.log('render WorkspacePage')

  return (
    <Layout>
      <div className="wrapper">
        <ManagerTools />
        <ManagerMap />
      </div>
    </Layout>
  )
}
