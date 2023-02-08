import React from 'react'
import { ClientHeader, Layout } from 'components'
import { classNames } from 'utils'

export default function ClientLayout(data) {
  const { children, className } = data

  return (
    <Layout>
      <ClientHeader />
      <div className={classNames('client-layout', [className])}>
        <div className="wrapper">{children}</div>
      </div>
    </Layout>
  )
}
