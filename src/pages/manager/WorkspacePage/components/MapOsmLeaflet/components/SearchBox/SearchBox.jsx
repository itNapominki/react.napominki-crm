import React, { useState } from "react";
import marcer from "../../../../../../../assets/icon/marker-metro.svg";
import styles from "./SearchBox.module.scss";
import { FormRadio } from "..";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
// const params = {
//   q: "",
//   format: "json",
//   addressdetails: "addressdetails",
// };

export default function SearchBox(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [isVisibleListAdress, setVisibleListAdress] = useState(false);
// задержка повторного назатия для того что бы OSM не нарушить ограничения (не чаще 1 раз в секунду запрос)
const [isDisabled, setIsDisabled] = useState(false);
  // сортировака по территории поиска МСК СПБ Вся Россия
  const [selectedOption, setSelectedOption] = useState("");

  // обработчмк - передать координаты точки + скрыть список
  function handleSetPosition(item) {
    setSelectPosition(item);
    setVisibleListAdress(false);
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Найти место на карте</h3>{" "}
      <FormRadio
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      ></FormRadio>
      <div style={{ display: "flex" }}>
        <input
          className={styles.input}
          placeholder="Введите улицу и номер дома"
          style={{ width: "100%", height: "26px" }}
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />

        <button
          disabled={isDisabled}
          className={styles.button}
          onClick={() => {
            setIsDisabled(true);
            setTimeout(() => setIsDisabled(false), 1500);
            // Search
            const params = {
              q: `${selectedOption}" "${searchText}`,
              format: "json",
              addressdetails: 1,
              polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
              method: "GET",
              redirect: "follow",
            };
            fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((response) => response.text())
              .then((result) => {
                console.log(JSON.parse(result));
                setListPlace(JSON.parse(result));
                setVisibleListAdress(true);
              })
              .catch((err) => console.log("err: ", err));
          }}
        >
          Найти
        </button>
      </div>
      <div className={styles.lists}>
        {isVisibleListAdress &&
          listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <div
                  onClick={() => {
                    handleSetPosition(item);
                    //console.log(item);
                  }}
                >
                  <div className={styles.list}>
                    {item?.address.road} {item?.address.house_number}{" "}
                    {item?.address.commercial} {item?.address.city}{" "}
                    {item?.address.state}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
