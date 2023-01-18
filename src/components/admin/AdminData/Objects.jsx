import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataTable } from 'components'
import { useFetch } from 'hooks'
import { api, joinStrings } from 'utils'

export default function Objects() {
  console.log('render Objects')

  const navigate = useNavigate()
  const objects = useFetch('/objects')
  const types = useFetch('/objects-types')

  const data = types
    ?.map((type) => {
      let arr = objects.filter(
        ({ object_type_id }) => object_type_id === type.id
      )

      arr = arr.map((elem) => {
        const {
          region: { value: region },
          city: { value: city },
          county: { value: county },
          district: { value: district },
          street,
          house,
        } = elem.address

        return {
          ...elem,
          address: joinStrings([region, city, county, district, street, house]),
        }
      })

      return {
        id: type.id,
        title: type.plural_value,
        objects: arr.length > 0 ? arr : null,
      }
    })
    .filter((type) => type.objects)

  const cols = [
    {
      key: 'name',
      name: 'Название',
      percentWidth: 42,
    },
    {
      key: 'address',
      name: 'Адрес',
      percentWidth: 29,
    },
  ]

  async function handleRemove(id) {
    if (window.confirm('Подтвердите удаление объекта')) {
      await api.objects.remove(id).then((res) => {
        console.log(res)
      })
    }
  }

  const droplist = [
    {
      text: 'Редактировать',
      onClick: (id) => navigate('/admin/edit-object/' + id),
    },
    {
      text: 'Удалить',
      color: 'red',
      onClick: (id) => handleRemove(id),
    },
  ]

  return (
    <React.Fragment>
      <Link className="admin-data__add-link" to="/admin/add-object">
        Добавить объект
      </Link>

      {data?.map((type) => {
        return (
          <div key={type.id} className="admin-data__table">
            <DataTable
              title={type.title}
              rows={type.objects}
              cols={cols}
              droplist={droplist}
            />
          </div>
        )
      })}
    </React.Fragment>
  )
}
