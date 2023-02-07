import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { Menu } from './components'
import { handleAdd } from './utils'
import { useFetch, useServerData } from 'hooks'

export default function Menus() {
  console.log('render EditRestaurant Menus')

  const context = React.useContext(EditRestaurantContext)
  const { id, data, setData, serverData, errors, setErrors } = context

  const options = useFetch('/menus', [])

  const [initialState] = useServerData(serverData, 'menus')
  const [menus, setMenus] = React.useState([])

  React.useEffect(() => setMenus(initialState), [initialState])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        menus,
      }
    })
  }, [menus])

  const onSave = {
    id,
    data,
    onSuccess: (res) => {
      console.log(res)
    },
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = id ? 'Редактирование ресторана' : 'Добавление ресторана'

  const deleteBtn = id
    ? {
        text: 'Удалить ресторан',
        onDelete: { id, message: 'Подтвердите удаление ресторана' },
      }
    : null

  return (
    <AdminForm
      model="restaurants"
      title={formTitle}
      onSave={onSave}
      deleteBtn={deleteBtn}
    >
      <AdminForm.Group
        title="Меню ресторана"
        button={{
          text: 'Добавить новое меню',
          onClick: () => handleAdd(setMenus),
        }}
      >
        {menus?.map((_, i) => {
          return (
            <div key={i} className="col col-12">
              <Menu
                menus={menus}
                options={options}
                onChange={setMenus}
                errors={errors}
                i={i}
              />
            </div>
          )
        })}
      </AdminForm.Group>
    </AdminForm>
  )
}
