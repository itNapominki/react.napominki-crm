import React from 'react'
import { useLocation } from 'react-router-dom'
import { About, Halls, Manager, Menus } from './components'
import { ROUTES } from 'core/router/routes'
import { ContentCard, Tabs } from 'components/general'
import { AdminForm } from 'components/admin'
import { EditRestaurantContext } from 'core/context'
import { useNavigation } from './hooks'

export default function EditRestaurant() {
  const context = React.useContext(EditRestaurantContext)
  const { id, data, setErrors } = context

  const { pathname } = useLocation()

  const [activeTab, navigation] = useNavigation()

  const components = [<About />, <Halls />, <Menus />, <Manager />]

  const onSave = {
    id,
    data,
    onSuccess: ({ data }) =>
      !id ? navigate('/admin/restaurants/edit/' + data.id) : null,
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = (id ? 'Редактирование' : 'Добавление') + ' ресторана'

  const deleteBtn = id
    ? {
        text: 'Удалить ресторан',
        onDelete: { id, message: 'Подтвердите удаление ресторана' },
      }
    : null

  return (
    <div className="wrapper">
      {pathname !== ROUTES.ADMIN_ADD_RESTAURANT.PATH && (
        <Tabs buttons={navigation} />
      )}
      <ContentCard>
        <AdminForm
          model="restaurant"
          title={formTitle}
          onSave={onSave}
          deleteBtn={deleteBtn}
        >
          {components[activeTab]}
        </AdminForm>
      </ContentCard>
    </div>
  )
}
