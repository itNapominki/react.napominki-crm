import React from 'react'
import { useFetch, useJoinStrings } from 'hooks'
import { AdminForm, Input } from 'components'
import { Inputs, Selects } from './components'

export default function Address(data) {
  console.log('render Form.Address')

  const { showFloor, setAddress } = data
  const serverData = useFetch('/addresses')

  const [selectsValues, setSelectsValues] = React.useState()
  const [inputsValue, setInputsValue] = React.useState('')

  const selectsText = selectsValues
    ? selectsValues
        .filter((elem) => elem)
        .map((elem) => elem.text)
        .join(', ')
    : ''

  console.log(inputsValue)

  const addressString = useJoinStrings([selectsText, inputsValue])

  return (
    <AdminForm.Group>
      <Selects serverData={serverData} setSelectsValues={setSelectsValues} />
      <Inputs
        showFloor={showFloor}
        addressString={addressString}
        setInputsValue={setInputsValue}
      />
    </AdminForm.Group>
  )
}
