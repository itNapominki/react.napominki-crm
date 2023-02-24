import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminLayout, DataTable } from 'components/admin'
import { Separator } from 'components/general'

import { useScrollLoad } from 'hooks'
import { useUserRoles } from './hooks'
import { droplist } from './utils'
import { MODELS } from 'core/constants'

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
    <AdminLayout fetching={fetching} data={data.length > 0}>
      {roles.length > 0 &&
        roles.map((role, i) => (
          <React.Fragment key={role.slug}>
            <DataTable
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
    </AdminLayout>
  )
}
