//import React from "react";
import "./OSMLEAFLET.css";
import {
  AttributionControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { filtringData, initialData, loadingData } from "./utils";
import React, { memo, useEffect, useMemo, useState } from "react";

//import { loadingData } from "./utils";

// export default React.memo(function YMAPS({
//   setModalFor,
//   setRadiusFilter,
//   setFilterVisible,
// })

//export default function

export default React.memo(function OSMLEAFLET({ datVisibleObjects }) {
 
  

  const position = [55.767193, 37.608239];

  const icon = L.icon({
    iconUrl: "./placeholder.png",
    iconSize: [38, 38],
  });
  const locationSelection = [55.768193, 37.609239];

  // запрос данных по ресторанам
  const loadRestaurantData = loadingData("restaurant", {
    limit: 10000,
    attributes: ["id", "title", "address", "isPublished", "point"],
    order: [["title", "ASC"]],
  });

  //запрос данных по остальным объектам
  const loadObjectData = loadingData("object", {
    limit: 10000,
    order: [
      ["type", "ASC"],
      ["title", "ASC"],
    ],
  });

  //фильтрация объектов (кладбища.ю морги, крематорий)
  const filterObjectData = filtringData(loadObjectData, datVisibleObjects);
  const object =
    filterObjectData == undefined ? loadObjectData : filterObjectData;

  console.log("render osm");
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        zIndex: 1,
        backgroundColor: "red",
      }}
    >
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={position}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {loadRestaurantData?.map((i) => (
          <div key={Math.random()}>
            <Marker
              position={i.point.coordinates}
              icon={L.divIcon({
                className: "custom-div-icon",
                html: `<div class='marker-pin'><div class='marker-pin-in'></div></div> <i class=marcer-number'></i>`,
                //html: `<div class='marker-pin'><div class='marker-pin-in'></div></div> <i class='marcer-number'>${ isHandleWidgetT && givStateNumber(i.client)}</i>`,
                iconSize: [30, 42],
                iconAnchor: [15, 42],
              })}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </div>
        ))}

        {object?.map((i) => (
          <div key={Math.random()}>
            <Marker
              position={i.point.coordinates}
              icon={L.divIcon({
                className: "custom-div-icon",
                html: `<div class='marker-pin'><div class='marker-pin-in'></div></div> <i class=marcer-number'></i>`,
                //html: `<div class='marker-pin'><div class='marker-pin-in'></div></div> <i class='marcer-number'>${ isHandleWidgetT && givStateNumber(i.client)}</i>`,
                iconSize: [30, 42],
                iconAnchor: [15, 42],
              })}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </div>
        ))}

        {/* <Marker
            position={locationSelection}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: `<div class='marker-pin'><div class='marker-pin-in'></div></div> <i class=marcer-number'></i>`,
              //html: `<div class='marker-pin'><div class='marker-pin-in'></div></div> <i class='marcer-number'>${ isHandleWidgetT && givStateNumber(i.client)}</i>`,
              iconSize: [30, 42],
              iconAnchor: [15, 42],
            })}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
      </MapContainer>
    </div>
  );
});
