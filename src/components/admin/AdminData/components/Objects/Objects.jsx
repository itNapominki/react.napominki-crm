import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DataTable, Separator } from 'components'
import { api, joinStrings } from 'core/utils'

export default function Objects() {
  console.log('render Objects')

  const navigate = useNavigate()

  const [types, setTypes] = React.useState([])
  const { data, setData, error } = api.getAll({
    model: api.model.object,
    value: [],
  })

  if (error) {
    alert(error.message)
  }

  React.useEffect(() => {
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

    setTypes(types)
  }, [data])

  function setObjects(objectsType) {
    return data
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

  const droplist = [
    {
      text: 'Редактировать',
      onClick: (id) => navigate('/admin/objects/' + id + '/edit'),
    },
    {
      text: 'Удалить',
      color: 'red',
      onClick: (id) =>
        api
          .delete({
            model: api.model.object,
            message: 'Подтвердите удаление объекта',
            id,
          })
          .then(() =>
            setData((prev) => prev.filter((object) => id != object.id))
          ),
    },
  ]

  return types?.map((type, i) => {
    return (
      <React.Fragment key={type.slug}>
        <DataTable
          title={type.title}
          rows={type.objects}
          cols={cols}
          droplist={droplist}
        />
        {i < types.length - 1 && <Separator />}
      </React.Fragment>
    )
  })
}
