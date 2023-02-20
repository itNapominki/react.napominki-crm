import React from 'react'

import { AdminLayout, DataTable } from 'components/admin'
import { Separator } from 'components/general'

import { useScrollLoad } from 'hooks'
import { useUserRoles, useDroplist } from './hooks'
import { MODELS } from 'core/constants'

export default function UsersPage() {
  const [data, setData, fetching] = useScrollLoad(MODELS.USER.VALUE, {
    order: [['role', 'ASC']],
  })

  const roles = useUserRoles(data)
  const droplist = useDroplist(setData)

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
    <AdminLayout fetching={fetching} data={data.length > 0}>
      {roles.length > 0 &&
        roles.map((role, i) => (
          <React.Fragment key={role.slug}>
            <DataTable
              title={role.title}
              rows={role.users}
              cols={cols}
              droplist={droplist}
            />
            {i < roles.length - 1 && <Separator />}
          </React.Fragment>
        ))}
    </AdminLayout>
  )
}
