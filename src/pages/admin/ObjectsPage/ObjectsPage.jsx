import React from 'react'
import { AdminLayout, DataTable } from 'components/admin'
import { Separator } from 'components/general'
import { useScrollLoad } from 'hooks'
import { useObjectTypes, useDroplist } from './hooks'

export default function ObjectsPage() {
  const [data, setData, fetching] = useScrollLoad('object', {
    order: [
      ['type', 'ASC'],
      ['title', 'ASC'],
    ],
  })

  const types = useObjectTypes(data)
  const droplist = useDroplist(setData)

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
              rows={type.objects}
              cols={cols}
              droplist={droplist}
            />
            {i < types.length - 1 && <Separator />}
          </React.Fragment>
        ))}
    </AdminLayout>
  )
}
