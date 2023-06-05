import React, { useState } from "react";
import styles from "./FormRouting.module.scss";

export default function FormRouting(props) {
  const { setFirstMarker, setSecondMarker, firstMarker, secondMarker } = props;
  const [searchTextInpuA, setSearchTextInpuA] = useState("");
  const [searchTextInpuB, setSearchTextInpuB] = useState("");
  const [listPlace, setListPlace] = useState([]);

  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
  const params = {
    q: "",
    format: "json",
    addressdetails: "addressdetails",
  };

  function handleSearch(searchText) {
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
        console.log(JSON.parse(result));
        setListPlace(JSON.parse(result));
      })
      .catch((err) => console.log("err: ", err));
  }

  // установка позиции
  /** в начале устанавливаем первую точку, потом обновляем только вторую */
  function selectPositionAllMarcer(item) {
    console.log(item);
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
            className={styles.button}
            onClick={() => handleSearch(searchTextInpuA)}
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
            className={styles.button}
            onClick={() => handleSearch(searchTextInpuB)}
          >
            Точка В
          </button>
        </div>
      </div>

      <div className={styles.lists}>
        {listPlace.map((item) => {
          return (
            <div className={styles.list} key={item?.place_id}>
              <div
                button
                onClick={() => {
                  selectPositionAllMarcer(item);
                }}
              >
                <div style={{ fontSize: 12 }}>{item?.display_name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
