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
import { api, getChildrenErrors } from 'core/utils'
import { MODELS } from 'core/constants'

export default function Menus() {
  console.log('render EditRestaurant Menus')

  const {
    setData,
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [options, setOptions] = React.useState([])

  React.useEffect(() => {
    api
      .getAll({ model: MODELS.MENU.VALUE, value: [] })
      .then(({ data }) => setOptions(data))
  }, [])

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
      {menus?.map((menu, i) => {
        function onInput(key, value) {
          handleInput(key, value, setMenus, i)
        }

        function onFileChange(file) {
          if (menu.id != file.id) {
            handleFileChange(setMenus, file, i)
          }
        }

        const menuErrors = getChildrenErrors(errors, 'menus')

        return (
          <div key={i} className="col col-12">
            <Menu
              menu={menu}
              options={options}
              handleInput={onInput}
              handleFileChange={onFileChange}
              handleRemove={() => handleRemove(setMenus, i)}
              errors={{ array: menuErrors, param: i }}
            />
          </div>
        )
      })}
    </AdminForm.Group>
  )
}
