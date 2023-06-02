import "./MyMarker.css";

import {
  AttributionControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import cemetery from "../../../../../assets/icon/marker-cemetery.svg";
import crematory from "../../../../../assets/icon/marker-crematory.svg";
import morgue from "../../../../../assets/icon/marker-morgue.svg";
import metro from "../../../../../assets/icon/marker-metro.svg";
import restaurant_1 from "../../../../../assets/icon/marker-restaurant-1.svg";
import restaurant_2 from "../../../../../assets/icon/marker-restaurant-2.svg";
import restaurant_3 from "../../../../../assets/icon/marker-restaurant-3.svg";
import restaurant_4 from "../../../../../assets/icon/marker-restaurant-4.svg";
import restaurant_5 from "../../../../../assets/icon/marker-restaurant-5.svg";

export default function MyMarker({
  coordinates,
  type = "RESTAURANT",
  title,
  address,
  id,
  all,
  setModalFor,
  priority,
}) {
  function buildMarker() {
    let iconMarker;
    let popupMarker;    

    const priorityRestaurant = {
      1: restaurant_1,
      2: restaurant_2,
      3: restaurant_3,
      4: restaurant_4,
      5: restaurant_5,
    };

    const popupObject = 
      <Popup>        
        Тип: {type}
        <br /> Название: {title}
        <br /> Адрес: {address}
        <br /> id: {id}
        <br />
      </Popup>
    ;    

    switch (type) {
      case "RESTAURANT":
        iconMarker = priorityRestaurant[priority];
        popupMarker = <></>;        
        break;
      case "CEMETERY":
        iconMarker = cemetery;
        popupMarker = popupObject;
        break;
      case "METRO":
        iconMarker = metro;
        popupMarker = popupObject;
        break;
      case "MORGUE":
        iconMarker = morgue;
        popupMarker = popupObject;
        break;
      case "CREMATORY":
        iconMarker = crematory;
        popupMarker = popupObject;
        break;
      default:
        popupMarker = <></>;
        iconMarker = restaurant_1;
        console.log("Не удалось определить тип объекта при отрисовке на карте");
        break;
    }

    return {iconMarker, popupMarker};
  }
 
  function handlMarcer() {
    if (type === "RESTAURANT") {
      setModalFor(id);
    }
  }

  return (
    <Marker
      position={coordinates}
      icon={L.divIcon({
        className: "custom-div-icon",
        html: `<div class='marker-pin-object'><img src='${buildMarker().iconMarker}'/></div>`,
        //html: `<div class='marker-pin'><div class='marker-pin-in'></div></div> <i class='marcer-number'>${ isHandleWidgetT && givStateNumber(i.client)}</i>`,
        iconSize: [30, 42],
        iconAnchor: [23, 60],
      })}
      eventHandlers={{
        click: (e) => {
          handlMarcer();
        },
      }}
    >
      {buildMarker().popupMarker}
    </Marker>
  );
}
