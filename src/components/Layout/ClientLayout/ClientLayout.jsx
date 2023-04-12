import styles from './ClientLayout.module.scss'
import React from 'react'
import { Outlet } from 'react-router-dom'

import { ClientHeader } from './'

import { classNames } from 'core/utils'
import { useDecrypted } from './hooks/indexs'

export default function ClientLayout({ className }) {
  const [restaurants, manager] = useDecrypted()

  return (
    <div className={classNames(styles.page, [className])}>
      <ClientHeader manager={manager} />

      <div className="wrapper">
        <Outlet context={{ restaurants, manager }} />
      </div>
    </div>
  )
}
