import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataTable } from 'components'
import { useFetch } from 'hooks'
import { api, joinStrings } from 'utils'

export default function Objects() {
  console.log('render Objects')

  const navigate = useNavigate()

  const objects = useFetch('/objects')
  const [data, setData] = React.useState()

  React.useEffect(() => {
    if (objects) {
      const types = [
        {
          title: 'Кладбища',
          slug: 'cemetery',
          objects: setObjects('cemetery'),
        },
        {
          title: 'Крематории',
          slug: 'crematory',
          objects: setObjects('crematory'),
        },
        {
          title: 'Морги',
          slug: 'morgue',
          objects: setObjects('morgue'),
        },
        {
          title: 'Метро',
          slug: 'metro',
          objects: setObjects('metro'),
        },
      ].filter(({ objects }) => objects.length > 0)

      setData(types)
    }
  }, [objects])

  function setObjects(objectsType) {
    return objects
      .map((object) => {
        let { city, county, district, street, house } = object.address

        // region = region === null ? null : region.title
        city = city === null ? null : city.title
        county = county === null ? null : county.title
        district = district === null ? null : district.title

        return {
          ...object,
          address: joinStrings([city, county, district, street, house]),
        }
      })
      .filter(({ type }) => type === objectsType)
  }

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
          <div key={type.slug} className="admin-data__table">
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
