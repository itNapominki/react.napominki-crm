import React, { useState } from "react";
import { AdminForm } from "components";
import { Input } from "components";
import { useErrors } from "hooks";
import { handleSearchWithoutSettings } from "utils";

export default function Address({
  address,
  setAddress,
  coordinates,
  setCoordinates,
  errors,
}) {
  console.log("render Address");
  // формируем список предлагаемых адресов
  const [listsAdress, setListsAdress] = useState(null); 

  const addressError = useErrors(errors, "address");
  const coordinatesError = useErrors(errors, "point.coordinates");

  // переход на Я карту для просмотра координат
  function handleOpenMap() {
    const url = "https://yandex.ru/maps/?text={" + address + "}";
    return window.open(url, "_blank");
  }

  // запрос данных с OSM город, улица, дом
  function handleSearch() {
   handleSearchWithoutSettings(address).then(data => {
    setListsAdress(data);    
   } )
  }

  // установка значений в input адрес и координаты
  function handleInsertionValuesInInputs(item) {
    console.log(item)
    setAddress(item.display_name);
    setCoordinates(`${item.lat}, ${item.lon}`);
    setListsAdress(null);
  }

  // формируем саму строчку для выбора
  const listSelectingAddresses = (item) => <div style={{cursor: 'pointer'}} key={item.osm_id} onClick={() => handleInsertionValuesInInputs(item)} >{item.display_name}</div>
  
  return (
    <>
      <AdminForm.Group title="Адрес">
        <AdminForm.Control
          type="text"
          label="Адрес"
          name="address"
          value={address}
          onInput={setAddress}
          error={addressError}
          placeholder="Регион, Город, Округ, Район, Улица, Дом"
          className="col col-9"
        />
        <AdminForm.Control
          label="Координаты (XX.XXXXXX, XX.XXXXXX)"
          name="point.coordinates"
          value={
            typeof coordinates === "string"
              ? coordinates
              : coordinates.join(", ")
          }
          onInput={setCoordinates}
          error={coordinatesError}
          // mask={['9[9][.9{1,6}], 9[9][.9{1,6}]']}
          className="col col-3"
          action={{
            text: "Открыть карту",
            onClick: handleOpenMap,
          }}
        />
      </AdminForm.Group>
      <AdminForm.Group title="Адрес (автоматический ввод с данных OSM)">
        <AdminForm.Control
          type="text"
          label="Адрес"
          name="address"
          value={address}
          onInput={setAddress}
          error={addressError}
          placeholder="Город, улица, дом"
          className="col col-9"          
        />
        <AdminForm.Control
          label="Координаты (XX.XXXXXX, XX.XXXXXX)"
          name="point.coordinates"
          value={
            typeof coordinates === "string"
              ? coordinates
              : coordinates.join(", ")
          }
          onInput={setCoordinates}
          error={coordinatesError}
          // mask={['9[9][.9{1,6}], 9[9][.9{1,6}]']}
          className="col col-3"
          action={{
            text: "Запрос координат",
            onClick: (e) => handleSearch(e),
          }}
        />{listsAdress?.map(i => listSelectingAddresses(i))}
      </AdminForm.Group> 
    </>
  );
}
