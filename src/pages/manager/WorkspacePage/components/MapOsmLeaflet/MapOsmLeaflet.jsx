import styles from "./MapOsmLeaflet.module.scss";
import React from "react";

import { ManagerOfferContext } from "context";
import { loadingData } from "./utils";
import { OSMLEAFLET } from ".";

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

  return (
    <React.Fragment>
      <div
        className={styles.container}
        data-settings={JSON.stringify(mapSettings)}
        data-searched={searchedCoords}
        data-radius-filter={JSON.stringify(radiusFilter)}
      >
        <OSMLEAFLET
          datVisibleObjects={visibleObjects}
          setModalFor={setModalFor}
        ></OSMLEAFLET>
      </div>
    </React.Fragment>
  );
}
