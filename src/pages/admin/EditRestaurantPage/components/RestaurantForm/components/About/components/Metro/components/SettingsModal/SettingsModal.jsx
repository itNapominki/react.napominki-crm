import React from 'react'
import { Modal } from 'components/general'
import { Input, Separator, Spinner } from 'components'
import { AddButton, Group } from './'
import { useScrollLoad } from 'hooks'
import { MODELS, OBJECT_TYPES } from 'core/constants'

import { EditRelatedMetroContext } from 'core/context'
import { useModalRef } from './hooks'
import { api, getObjKeyName } from 'core/utils'

export default function SettingsModal({ toggleModal }) {
  const { relatedMetro } = React.useContext(EditRelatedMetroContext)

  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchValue, setSearchValue] = React.useState([])

  const [modalRef, contentNode] = useModalRef()

  const [stations, setStations, fetching] = useScrollLoad(
    MODELS.OBJECT.VALUE,
    {
      where: { type: getObjKeyName(() => OBJECT_TYPES.METRO) },
      order: [['title', 'ASC']],
    },
    contentNode
  )

  console.log(relatedMetro)

  // React.useEffect(() => {
  //   api
  //     .getAll({
  //       model: MODELS.OBJECT.VALUE,
  //       params: {
  //         where: { type: OBJECT_TYPES.METRO },
  //       },
  //     })
  //     .then(({ data }) => console.log(data))
  // }, [searchTerm])

  return (
    <Modal.Container ref={modalRef} onClose={toggleModal}>
      <Modal.ModalSide headerLeft={<AddButton />}>
        <Input
          type="search"
          label="Поиск"
          value={searchTerm}
          onInput={setSearchTerm}
          bigLabel
        />
        <Separator />

        <Group title="Связанные станции" stations={relatedMetro} />
        <Group title="Все станции" stations={stations} />

        <Spinner show={fetching} />
      </Modal.ModalSide>
    </Modal.Container>
  )
}
