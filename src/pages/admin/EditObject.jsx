import React from 'react'
import {
  AdminForm,
  // AdminFormGroup,
  AdminLayout,
  Input,
  Select,
} from '../../components'

export default function EditObject() {
  // const [address, setAddress] = React.useState('')
  // const [region, setRegion] = React.useState('Москва и МО')
  // const [city, setCity] = React.useState('—')
  // const [county, setCounty] = React.useState('—')
  // const [district, setDistrict] = React.useState('—')
  // const [street, setStreet] = React.useState('')
  // const [house, setHouse] = React.useState('')
  // function handleOpenMap() {
  //   const url = 'https://yandex.ru/maps/?text={' + address + '}'
  //   return window.open(url, '_blank')
  // }
  // const handleRegionChange = (value) => setRegion(value)
  // const handleCityChange = (value) => setCity(value)
  // const handleCountyChange = (value) => setCounty(value)
  // const handleDistrictChange = (value) => setDistrict(value)
  // const handleStreetInput = (value) => setStreet(value)
  // const handleHouseInput = (value) => setHouse(value)
  // React.useEffect(() => {
  //   setAddress([region, city, county, district, street, house].join(' '))
  // }, [region, street])
  // return (
  //   <AdminLayout>
  //     <AdminForm title="Добавление объекта">
  //       <AdminFormGroup>
  //         <Select
  //           label="Тип объекта"
  //           value="Кладбище"
  //           options={[
  //             { text: 'Кладбище' },
  //             { text: 'Морг' },
  //             { text: 'Крематорий' },
  //             { text: 'Метро' },
  //           ]}
  //           className="col col-12 "
  //         />
  //         <Select
  //           label="Регион"
  //           value="Москва и МО"
  //           options={[{ text: 'Москва и МО' }]}
  //           onChange={handleRegionChange}
  //           className="col col-4"
  //         />
  //         <Select
  //           label="Город"
  //           value="—"
  //           options={[
  //             { text: 'Москва' },
  //             { text: 'Королёв' },
  //             { text: 'Балашиха' },
  //           ]}
  //           onChange={handleCityChange}
  //           className="col col-4"
  //         />
  //         <Select
  //           label="Округ"
  //           value="—"
  //           options={[{ text: 'ЦАО' }, { text: 'САО' }]}
  //           onChange={handleCountyChange}
  //           className="col col-4"
  //         />
  //         <Select
  //           label="Район"
  //           value="—"
  //           options={[{ text: 'ЦАО' }, { text: 'САО' }]}
  //           onChange={handleDistrictChange}
  //           className="col col-4"
  //         />
  //         <Input
  //           type="text"
  //           label="Улица"
  //           onInput={handleStreetInput}
  //           className="col col-4"
  //         />
  //         <Input
  //           type="text"
  //           label="Дом, корпус, литер"
  //           onInput={handleHouseInput}
  //           className="col col-4"
  //         />
  //         <Input
  //           type="text"
  //           label="Координаты"
  //           mask="99.999999, 99.999999"
  //           action={{
  //             text: 'Открыть карту',
  //             onClick: handleOpenMap,
  //           }}
  //           className="col col-4"
  //         />
  //       </AdminFormGroup>
  //     </AdminForm>
  //   </AdminLayout>
  // )
}
