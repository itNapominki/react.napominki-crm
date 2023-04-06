import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Layout, AdminDataTable, Separator, Spinner } from 'components'

import { useScrollLoad } from 'hooks'
import { useObjectTypes } from './hooks'
import { droplist } from './utils'
import { getObjKeyName } from 'core/utils'
import { USER_ROLES } from 'core/constants'

export default function ObjectsPage() {
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
    <Layout>
      <Layout.UserLayout
        roles={[
          getObjKeyName(() => USER_ROLES.ADMIN),
          getObjKeyName(() => USER_ROLES.REDAKTOR),
        ]}
        containerClassName="card"
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
              {i < types.length - 1 && <Separator />}
            </React.Fragment>
          ))}

        {fetching && <Spinner show={fetching} />}
      </Layout.UserLayout>
    </Layout>
  )
}
