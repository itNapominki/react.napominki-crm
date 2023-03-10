import React from 'react'
import { AdminForm } from 'components/admin'
import { Menu } from './components'

import {
  handleAdd,
  handleInput,
  handleFileChange,
  handleRemove,
} from './handlers'

import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'
import { api } from 'core/utils'
import { MODELS } from 'core/constants'

export default function Menus() {
  console.log('render EditRestaurant Menus')

  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [options, setOptions] = React.useState([])

  React.useEffect(() => {
    api
      .getAll({ model: MODELS.MENU.VALUE, value: [] })
      .then(({ data }) => setOptions(data))
  }, [])

  const initialState = useInitial(initial, 'menus')
  const [menus, setMenus] = React.useState([])

  React.useEffect(() => setMenus(initialState), [initialState])

  return (
    <AdminForm.Group
      button={{
        text: 'Добавить новое меню',
        onClick: () => handleAdd(setMenus),
      }}
    >
      {menus?.map((menu, i) => {
        function onInput(key, value) {
          handleInput(key, value, setMenus, i)
        }

        function onFileChange(file) {
          if (menu.file.id != file.id) {
            handleFileChange(setMenus, file, i)
          }
        }

        return (
          <div key={i} className="col col-12">
            <Menu
              name={`menus[${i}]`}
              menu={menu}
              options={options}
              handleInput={onInput}
              handleFileChange={onFileChange}
              handleRemove={() => handleRemove(setMenus, i)}
              errors={errors}
            />
          </div>
        )
      })}
    </AdminForm.Group>
  )
}
