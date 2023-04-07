import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { AdminDataCard, AdminDataTable } from 'components'

import { useScrollLoad } from 'hooks'
import { useObjectTypes } from './hooks'
import { droplist } from './utils'
import { getObjKeyName } from 'core/utils'
import { USER_ROLES } from 'core/constants'
import { ROUTES } from 'router/routes'

export default function ObjectsPage() {
  const { setRoles } = useOutletContext()
  setRoles([
    getObjKeyName(() => USER_ROLES.ADMIN),
    getObjKeyName(() => USER_ROLES.REDAKTOR),
  ])

  const [data, setData, fetching] = useScrollLoad('object', {
    order: [
      ['type', 'ASC'],
      ['title', 'ASC'],
    ],
  })

  const navigate = useNavigate()
  const types = useObjectTypes(data)

  const cols = [
    {
      key: 'title',
      name: 'Название',
      percentWidth: 42,
    },
    {
      key: 'address',
      name: 'Адрес',
      percentWidth: 29,
    },
  ]

  return (
    <AdminDataCard
      fetching={fetching}
      link={{
        text: 'Добавить объект',
        path: ROUTES.ADMIN.CHILDREN.OBJECTS_CREATE.PATH,
      }}
    >
      {types.length > 0 &&
        types.map((type, i) => (
          <React.Fragment key={type.slug}>
            <AdminDataTable
              title={type.title}
              rows={type.objects.map((object) => {
                return {
                  ...object,
                  droplist: droplist(setData, object.id, navigate),
                }
              })}
              cols={cols}
            />
          </React.Fragment>
        ))}
    </AdminDataCard>
  )
}
