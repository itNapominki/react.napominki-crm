import React, { useState } from "react";
import styles from "./FormRouting.module.scss";

export default function FormRouting(props) {
  const { setFirstMarker, setSecondMarker, firstMarker, secondMarker, timeAndDistanceAboutRoute } = props;
  const [searchTextInpuA, setSearchTextInpuA] = useState("");
  const [searchTextInpuB, setSearchTextInpuB] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [isVisibleListAdress, setVisibleListAdress] = useState(false);
  // задержка повторного назатия для того что бы OSM не нарушить ограничения (не чаще 1 раз в секунду запрос)
  const [isDisabled, setIsDisabled] = useState(false);
  
  // обработчик - передать координаты точки + скрыть список
  function handleSetPosition(item) {
    setVisibleListAdress(false);
    selectPositionAllMarcer(item);
  }

  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
  const params = {
    q: "",
    format: "json",
    addressdetails: "addressdetails",
  };

  function handleSearch(searchText) {
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 1500);
    // Search
    const params = {
      q: searchText,
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
        //console.log(JSON.parse(result));
        setListPlace(JSON.parse(result));
        setVisibleListAdress(true);
      })
      .catch((err) => console.log("err: ", err));
  }

  // установка позиции
  /** в начале устанавливаем первую точку, потом обновляем только вторую */
  function selectPositionAllMarcer(item) {
    //console.log(item);
    if (firstMarker == null) {
      setFirstMarker(item);
    } else {
      setSecondMarker(item);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>Построить маршрут</h3>
        <div className={styles.searchContainer}>
          <input
            placeholder="Введите улицу и номер дома"
            className={styles.input}
            value={searchTextInpuA}
            onChange={(event) => {
              setSearchTextInpuA(event.target.value);
            }}
          />

          <button
            type="button"
            className={styles.button}
            onClick={() => handleSearch(searchTextInpuA)}
            disabled={isDisabled}
          >
            Точка А
          </button>
        </div>

        <div className={styles.searchContainer}>
          <input
            placeholder="Введите улицу и номер дома"
            className={styles.input}
            value={searchTextInpuB}
            onChange={(event) => {
              setSearchTextInpuB(event.target.value);
            }}
          />

          <button
            type="button"
            className={styles.button}
            onClick={() => handleSearch(searchTextInpuB)}
            disabled={isDisabled}
          >            
            Точка В
          </button>
        </div>
      </div>

      <div className={styles.lists}>
        {isVisibleListAdress &&
          listPlace.map((item) => {
            return (
              <div className={styles.list} key={item?.place_id}>
                <div
                  onClick={() => {
                    handleSetPosition(item);
                  }}
                >
                  <div style={{ fontSize: 12 }}>{item?.display_name}</div>
                </div>
              </div>
            );
          })}
      </div> 
      <div>Время: {Math.floor(timeAndDistanceAboutRoute.time/60)} час, Расстояние: {Math.floor(timeAndDistanceAboutRoute.distance)} км</div>
    </div>
  );
}
