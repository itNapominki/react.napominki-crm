import styles from "./MapOsmLeaflet.module.scss";
import React from "react";

//import { YMAPS } from './'

import { ManagerOfferContext } from "context";
import { loadingData } from "./utils";
import { OSMLEAFLET } from ".";
//import OSMLEAFLET from "./OSMLEAFLET";

export default function MapOsmLeaflet() {
  const {
    visibleObjects,
    setModalFor,
    radiusFilter,
    setRadiusFilter,
    setFilterVisible,
    mapSettings,
    searchedCoords,
  } = React.useContext(ManagerOfferContext);

  // // запрос данных по ресторанам
  // const restaurantData = loadingData("restaurant", {
  //   attributes: ["id", "title", "address", "isPublished", "point"],
  //   order: [["title", "ASC"]],
  // });
  // // запрос данных по остальным объектам
  // const objectData = loadingData("object", {
  //   order: [
  //     ["type", "ASC"],
  //     ["title", "ASC"],
  //   ],
  // });

  // console.log(restaurantData);
  // console.log(objectData);

  // console.log("render");

  return (
    <React.Fragment>
      <div
        id="map"
        className={styles.container}
        data-settings={JSON.stringify(mapSettings)}
        data-searched={searchedCoords}
        data-visible-objects={visibleObjects}
        data-radius-filter={JSON.stringify(radiusFilter)}
      >
        <OSMLEAFLET></OSMLEAFLET>
      </div>
    </React.Fragment>
  );
}
