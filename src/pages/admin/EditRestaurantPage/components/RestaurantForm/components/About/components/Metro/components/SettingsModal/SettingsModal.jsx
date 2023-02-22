import React from 'react'
import { Input, Modal, Separator, Spinner } from 'components/general'
import { Group } from './components'
import { useScrollLoad } from 'hooks'
import { MODELS, OBJECT_TYPES } from 'core/constants'

import { EditRelatedMetroContext } from 'core/context'
import { useModalRef } from './hooks'
import { api } from 'core/utils'

export default function SettingsModal({ toggleModal }) {
  const { relatedMetro } = React.useContext(EditRelatedMetroContext)

  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchValue, setSearchValue] = React.useState([])

  const [modalRef, contentNode] = useModalRef()

  const [stations, setStations, fetching] = useScrollLoad(
    MODELS.OBJECT.VALUE,
    {
      where: { type: OBJECT_TYPES.METRO },
      order: [['title', 'ASC']],
    },
    contentNode
  )

  console.log(searchValue)

  React.useEffect(() => {
    api
      .getAll({
        model: MODELS.OBJECT.VALUE,
        params: {
          where: { type: OBJECT_TYPES.METRO },
        },
      })
      .then(({ data }) => console.log(data))
  }, [searchTerm])

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

      <Group title="Связанные станции" stations={relatedMetro} />
      <Group
        title="Все станции"
        stations={stations.slice(20, stations.length)}
      />

      <Spinner show={fetching} className="asdf" />
    </Modal>
  )
}
