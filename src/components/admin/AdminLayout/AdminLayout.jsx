import './AdminLayout.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { AdminHeader, Layout, Tabs } from 'components'

export default function AdminLayout({ children, pageClass, navigation }) {
  const user = useSelector((state) => state.user.value)

  return null
  // (
  //   user && (
  //     // <Layout pageClass={pageClass}>
  //     //   <AdminHeader userEmail={user.email} />
  //     //   <div className="admin-layout">
  //     //     <div className="wrapper">
  //     //       {navigation && (
  //     //         <div className="admin-navigation">
  //     //           <Tabs buttons={navigation} />
  //     //         </div>
  //     //       )}
  //     //       {children}
  //     //     </div>
  //     //   </div>
  //     // </Layout>
  //   )
  // )
}
