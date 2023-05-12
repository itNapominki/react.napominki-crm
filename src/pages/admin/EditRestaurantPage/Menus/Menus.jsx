import React from 'react'

import { AdminForm } from 'components'
import { Menu } from './'

import {
  handleAdd,
  handleInput,
  handleFileChange,
  handleRemove,
} from './handlers'

import { EditRestaurantContext } from 'context'
import { useInitial } from 'hooks'
import { api } from 'utils'
import { MODELS } from 'constants'

export default function Menus() {
  console.log('render EditRestaurant Menus')

  const {
    initial,
    error: { errors },
  } = React.useContext(EditRestaurantContext)

  const [options, setOptions] = React.useState([])

  React.useEffect(() => {
    api.getAll({ model: MODELS.MENU.VALUE, value: [] }).then(({ data }) => {
      setOptions(
        data.map(({ title, id }) => {
          return {
            text: title,
            value: id,
          }
        })
      )

      if (!menus) {
        setMenus(
          data.map(({ title, id }) => ({
            id,
            title,
            persons: 0,
            deposit: 0,
          }))
        )
      }
    })
  }, [])

  const [menus, setMenus] = useInitial(initial, 'menus')

  return (
    <AdminForm.Group
      button={{
        text: 'Добавить новое меню',
        onClick: () => handleAdd(setMenus),
      }}
    >
      {menus?.map((menu, i) => {
        function onFileChange(id) {
          const value = options.find(({ value }) => value === id)
          if (menu.id != id) {
            handleFileChange(setMenus, value, i)
          }
        }

        return (
          <div key={i} className="col col-12">
            <Menu
              name={`menus[${i}]`}
              menu={menu}
              options={options}
              handleInput={(key, value) => handleInput(key, value, setMenus, i)}
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
