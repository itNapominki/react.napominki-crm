import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminLayout, DataTable } from 'components/admin'
import { Separator } from 'components/general'

import { useScrollLoad } from 'hooks'
import { useObjectTypes } from './hooks'
import { droplist } from './utils'

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
    <AdminLayout fetching={fetching} data={data.length > 0}>
      {types.length > 0 &&
        types.map((type, i) => (
          <React.Fragment key={type.slug}>
            <DataTable
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
    </AdminLayout>
  )
}
