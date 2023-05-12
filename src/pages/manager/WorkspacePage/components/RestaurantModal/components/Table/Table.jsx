import styles from './Table.module.scss'
import React from 'react'

import { Group, Whatsapp } from './'

import { ManagerRestaurantContext } from 'context'
import { getShedule } from './utils'

export default function Table() {
  const {
    data: {
      id,
      status,
      priority,
      food,
      delivery,
      prepay,
      halls,
      managerInfo: { shedule, contacts, whatsapp, comment },
      clientInfo: { shedule: clientShedule },
    },
  } = React.useContext(ManagerRestaurantContext)

  return (
    <div className={styles.container}>
      <Group
        rows={[
          ['ID заведения', id],
          ['Статус ресторана', status],
          ['Приоритет загрузки', priority],
          ['Продукты', food],
          ['Доставка', delivery],
          ['Предоплаты', prepay],
        ]}
      />

      <Group
        title="Залы"
        rows={halls.map(({ title, boarding, fit }) => [
          title,
          `от ${boarding} до ${fit} человек`,
        ])}
      />

      <Group
        title="Режим работы"
        rows={[
          ['Реальный', getShedule(shedule)],
          ['Для клиента', getShedule(clientShedule)],
        ]}
      />

      <Group
        title="Контакты"
        rows={contacts?.map(({ phone, fullname, position }) => [
          [fullname, position].join(', '),
          phone,
        ])}
      />

      {whatsapp.length > 0 && (
        <Group title="Группа в WhatsApp">
          <Whatsapp url={whatsapp} />
        </Group>
      )}
    </div>
  )
}
