import React from 'react'
import { Input, Modal } from 'components/general'
import { Separator, Spinner } from 'components'
import { Group } from './components'
import { useScrollLoad } from 'hooks'
import { MODELS, OBJECT_TYPES } from 'core/constants'

import { EditRelatedRestaurantsContext } from 'core/context'
import { useModalRef } from './hooks'
import { api } from 'core/utils'

export default function SettingsModal({ toggleModal }) {
  const { relatedRestaurants } = React.useContext(EditRelatedRestaurantsContext)

  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchValue, setSearchValue] = React.useState([])

  const [modalRef, contentNode] = useModalRef()

  const [restaurants, setRestaurants, fetching] = useScrollLoad(
    MODELS.RESTAURANT.VALUE,
    {
      order: [['title', 'ASC']],
      attributes: ['id', 'title', 'address'],
    },
    contentNode
  )

  // React.useEffect(() => {
  //   api
  //     .getAll({
  //       model: MODELS.RESTAURANT.VALUE,
  //       params: {
  //         order: [['title', 'ASC']],
  //       },
  //     })
  //     .then(({ data }) => console.log(data))
  // }, [searchTerm])

  return (
    <Modal ref={modalRef} mode="right" onClose={toggleModal}>
      <Input
        type="search"
        label="Поиск"
        value={searchTerm}
        onInput={setSearchTerm}
        bigLabel
      />
      <Separator />

      <Group title="Связанные рестораны" restaurants={relatedRestaurants} />
      <Group
        title="Все рестораны"
        restaurants={restaurants.slice(20, restaurants.length)}
      />

      <Spinner show={fetching} className="asdf" />
    </Modal>
  )
}
