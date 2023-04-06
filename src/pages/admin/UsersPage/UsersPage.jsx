import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminDataTable, Layout, Separator, Spinner } from 'components'

import { useScrollLoad } from 'hooks'
import { useUserRoles } from './hooks'
import { droplist } from './utils'
import { MODELS, USER_ROLES } from 'core/constants'
import { getObjKeyName } from 'core/utils'

export default function UsersPage() {
  const [data, setData, fetching] = useScrollLoad(MODELS.USER.VALUE, {
    order: [['role', 'ASC']],
  })

  const navigate = useNavigate()
  const roles = useUserRoles(data)

  const cols = [
    {
      key: ['firstName', 'lastName'],
      name: 'ФИО',
      percentWidth: 42,
    },
    {
      key: 'email',
      name: 'Почта',
      percentWidth: 29,
    },
    {
      key: 'phone',
      name: 'Телефон',
      percentWidth: 36,
    },
  ]

  return (
    <Layout>
      <Layout.UserLayout
        roles={[getObjKeyName(() => USER_ROLES.ADMIN)]}
        containerClassName="card"
      >
        {roles.length > 0 &&
          roles.map((role, i) => (
            <React.Fragment key={role.slug}>
              <AdminDataTable
                fetching={fetching}
                title={role.title}
                rows={role.users.map((user) => {
                  return {
                    ...user,
                    droplist: droplist(setData, user.id, navigate),
                  }
                })}
                cols={cols}
              />
              {i < roles.length - 1 && <Separator />}
            </React.Fragment>
          ))}

        {fetching && <Spinner show={fetching} />}
      </Layout.UserLayout>
    </Layout>
  )
}
