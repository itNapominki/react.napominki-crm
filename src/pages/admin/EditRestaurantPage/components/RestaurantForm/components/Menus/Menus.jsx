import React from 'react'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { Menu } from './components'
import { handleAdd } from './utils'
import { useInitial } from 'hooks'
import { api } from 'core/utils'

export default function Menus() {
  console.log('render EditRestaurant Menus')

  const context = React.useContext(EditRestaurantContext)
  const { setData, initial, errors } = context

  const { data: options } = api.getAll({ model: api.model.menu, value: [] })

  const [initialState] = useInitial(initial, 'menus')
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

  return (
    <AdminForm.Group
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
  )
}
