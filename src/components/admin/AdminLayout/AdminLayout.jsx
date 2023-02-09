import './AdminLayout.scss'

import { AdminHeader, Layout, Tabs } from 'components'

export default function AdminLayout({ children, pageClass, navigation }) {
  return (
    <Layout pageClass={pageClass}>
      <AdminHeader userEmail="admin@napominki.ru" />
      <div className="admin-layout">
        <div className="wrapper">
          {navigation && (
            <div className="admin-navigation">
              <Tabs buttons={navigation} />
            </div>
          )}
          <div className="admin-layout__card">{children}</div>
        </div>
      </div>
    </Layout>
  )
}
