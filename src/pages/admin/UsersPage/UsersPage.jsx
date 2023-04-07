import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { AdminDataCard, AdminDataTable } from 'components'

import { useScrollLoad } from 'hooks'
import { useUserRoles } from './hooks'
import { droplist } from './utils'
import { MODELS, USER_ROLES } from 'core/constants'
import { getObjKeyName } from 'core/utils'
import { ROUTES } from 'router/routes'

export default function UsersPage() {
  const { setRoles } = useOutletContext()
  setRoles([getObjKeyName(() => USER_ROLES.ADMIN)])

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
    <AdminDataCard
      fetching={fetching}
      link={{
        text: 'Добавить пользователя',
        path: ROUTES.ADMIN.CHILDREN.USERS_CREATE.PATH,
      }}
    >
      {roles.length > 0 &&
        roles.map((role, i) => (
          <React.Fragment key={role.slug}>
            <AdminDataTable
              title={role.title}
              rows={role.users.map((user) => {
                return {
                  ...user,
                  droplist: droplist(setData, user.id, navigate),
                }
              })}
              cols={cols}
            />
          </React.Fragment>
        ))}
    </AdminDataCard>
  )
}
