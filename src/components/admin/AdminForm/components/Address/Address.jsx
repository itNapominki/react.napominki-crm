import React from 'react'
import { useFetch, useJoinStrings } from 'hooks'
import { AdminForm } from 'components'
import { Inputs, Selects } from './components'

export default function Address(data) {
  console.log('render Form.Address')

  const { initialAddress, setAddress, showFloor } = data

  const serverData = useFetch('/addresses')

  const [selectsValues, setSelectsValues] = React.useState()
  const [inputsValue, setInputsValue] = React.useState('')

  const selectsText = selectsValues
    ? selectsValues
        .filter((elem) => elem)
        .map((elem) => elem.text)
        .join(', ')
    : ''

  const addressString = useJoinStrings([selectsText, inputsValue])

  React.useEffect(() => {
    let address = {}

    if (selectsValues) {
      selectsValues.forEach((elem, i) => {
        const type =
          i === 0
            ? 'region'
            : i === 1
            ? 'city'
            : i === 2
            ? 'county'
            : i === 3
            ? 'district'
            : console.error('Ошибка при обновлении адреса. AdminForm Address')

        address[type] = {
          value: elem !== null ? elem.text : null,
          id: elem !== null ? elem.id : null,
        }
      })
    }

    setAddress({ ...address, ...inputsValue })
  }, [selectsValues, inputsValue])

  return (
    <AdminForm.Group>
      <Selects
        initialAddress={initialAddress}
        serverData={serverData}
        setSelectsValues={setSelectsValues}
      />
      <Inputs
        showFloor={showFloor}
        initialAddress={initialAddress}
        addressString={addressString}
        setInputsValue={setInputsValue}
      />
    </AdminForm.Group>
  )
}
