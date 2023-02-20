import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { About, Halls, Manager, Menus } from './components'
import { ROUTES } from 'router/routes'
import { ContentCard, Tabs } from 'components/general'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useNavigation } from './hooks'

export default function EditRestaurant() {
  console.log('render EditRestaurant')
  const context = React.useContext(EditRestaurantContext)
  const { id, data, setErrors } = context

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [activeTab, navigation] = useNavigation()

  const components = [<About />, <Halls />, <Menus />, <Manager />]

  const onSave = {
    id,
    data,
    onSuccess: (data) => {
      if (!id) {
        navigate(
          ROUTES.ADMIN_UPDATE_RESTAURANT.PATH.replace(':id', '') + data.id
        )
      }
    },

    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = (id ? 'Редактирование' : 'Добавление') + ' ресторана'

  const deleteButton = {
    text: 'Удалить ресторан',
    message: 'Подтвердите удаление ресторана',
  }

  return (
    <div className="wrapper">
      {pathname !== ROUTES.ADMIN_CREATE_RESTAURANT.PATH && (
        <Tabs buttons={navigation} />
      )}
      <ContentCard>
        <AdminForm
          id={id}
          model="restaurant"
          title={formTitle}
          onSave={onSave}
          deleteButton={deleteButton}
        >
          {components[activeTab]}
        </AdminForm>
      </ContentCard>
    </div>
  )
}
