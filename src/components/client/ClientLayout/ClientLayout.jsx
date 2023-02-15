import React from 'react'
import { ClientHeader, Layout } from 'components'
import { classNames } from 'core/utils'

export default function ClientLayout({ children, className, manager }) {
  return (
    <Layout>
      <ClientHeader manager={manager} />
      <div className={classNames('client-layout', [className])}>
        <div className="wrapper">{children}</div>
      </div>
    </Layout>
  )
}
