import React from 'react'
import { AdminForm } from 'components/admin'
import { EditObjectContext } from 'core/context'
import { Address, Title, Type } from './components'
import { useNavigate } from 'react-router-dom'
import { ContentCard } from 'components/general'
import { ROUTES } from 'router/routes'

export default function EditObject() {
  console.log('render EditObject')

  const navigate = useNavigate()

  const context = React.useContext(EditObjectContext)
  const { id, data, setErrors } = context

  const onSave = {
    id,
    data,
    onSuccess: () => {
      setErrors()
      navigate(ROUTES.ADMIN_OBJECTS.PATH)
    },
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = (id ? 'Редактирование' : 'Добавление') + ' объекта'

  const deleteButton = {
    text: 'Удалить объект',
    onDelete: { id, message: 'Подтвердите удаление объекта' },
  }

  return (
    <ContentCard>
      <AdminForm
        mode={id ? 'update' : 'create'}
        model="object"
        title={formTitle}
        onSave={onSave}
        deleteButton={deleteButton}
      >
        <AdminForm.Group title="Основное">
          <Type />
          <Title />
        </AdminForm.Group>
        <Address />
      </AdminForm>
    </ContentCard>
  )
}
