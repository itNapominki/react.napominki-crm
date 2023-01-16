import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { DataTable } from 'components'
import { useFetch } from 'hooks'

export default function Objects() {
  console.log('render Objects')

  const objects = useFetch('/objects')
  const navigate = useNavigate()

  const cols = [
    {
      key: 'objectName',
      name: 'Название',
      percentWidth: 42,
    },
    {
      key: 'objectAddress',
      name: 'Адрес',
      percentWidth: 29,
    },
  ]

  return (
    <React.Fragment>
      <Link className="admin-data__add-link" to="/admin/add-object">
        Добавить объект
      </Link>
      {objects?.map((type) => {
        return (
          <div key={type.type} className="admin-data__table">
            <DataTable
              title={type.typeName}
              rows={type.objects}
              cols={cols}
              droplist={[
                { text: 'Редактировать' },
                { text: 'Удалить', color: 'red' },
              ]}
            />
          </div>
        )
      })}
    </React.Fragment>
  )
}
