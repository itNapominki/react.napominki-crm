import styles from "./MapOsmLeaflet.module.scss";
import React, { useState } from "react";

import { ManagerOfferContext } from "context";
import { loadingData } from "./utils";
import { OSMLEAFLET } from ".";
import { FormRouting, SearchBox } from "./components";

export default function MapOsmLeaflet() {
  // установка маркера на карту из поля поиска
  const [selectPosition, setSelectPosition] = useState(null);

  // построение маршрута
   // модуль роутинга
   const [firstMarker, setFirstMarker] = useState(null);
   const [secondMarker, setSecondMarker] = useState(null);
   // информация о маршруте 
   const [timeAndDistanceAboutRoute, seTtimeAndDistanceAboutRoute ] = useState({time: null, distance: null});

  const {
    visibleObjects,
    setModalFor,
    radiusFilter,
    setRadiusFilter,
    setFilterVisible,
    mapSettings,
    searchedCoords,
  } = React.useContext(ManagerOfferContext);

  return (
    <React.Fragment>
      <div
        style={{ position: "relative" }}
        className={styles.container}
        data-settings={JSON.stringify(mapSettings)}
        data-searched={searchedCoords}
        data-radius-filter={JSON.stringify(radiusFilter)}
      >
        <OSMLEAFLET
        // информация о самом маршруте 
        seTtimeAndDistanceAboutRoute={seTtimeAndDistanceAboutRoute} 
          // позиция маркера который ищут
          selectPosition={selectPosition}
          // [] с атрибутами фильтрации METRO и.т. далее
          datVisibleObjects={visibleObjects}
          // открытие popup при нажатии на ресторан
          setModalFor={setModalFor}
          // построение маршрута          
        setFirstMarker={setFirstMarker}
        setSecondMarker={setSecondMarker}
        firstMarker={firstMarker}
        secondMarker={secondMarker}
        // передача радиуса фильтра
        radiusFilter={radiusFilter}
        ></OSMLEAFLET>
        <SearchBox
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
        <FormRouting
        timeAndDistanceAboutRoute={timeAndDistanceAboutRoute}
        seTtimeAndDistanceAboutRoute={seTtimeAndDistanceAboutRoute}        
        setFirstMarker={setFirstMarker}
        setSecondMarker={setSecondMarker}
        firstMarker={firstMarker}
        secondMarker={secondMarker}>          
        </FormRouting>
      </div>
    </React.Fragment>
  );
}
