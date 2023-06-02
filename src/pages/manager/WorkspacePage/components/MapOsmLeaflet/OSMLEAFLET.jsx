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
import MyMarker from "./MyMarker";

export default React.memo(function OSMLEAFLET({
  datVisibleObjects,
  setModalFor,
}) {
  const position = [55.767193, 37.608239];

  const icon = L.icon({
    iconUrl: "./placeholder.png",
    iconSize: [38, 38],
  });
  const locationSelection = [55.768193, 37.609239];

  // запрос данных по ресторанам
  const loadRestaurantData = loadingData("restaurant", {
    limit: 10000,
    attributes: ["id", "title", "address", "isPublished", "point", "priority"],
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

  //фильтрация объектов (кладбища, морги, крематорий)
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
            <MyMarker
              coordinates={i.point.coordinates}
              all={i}
              type={i.type}
              setModalFor={setModalFor}
              id={i.id}
              priority={i.priority}
            ></MyMarker>
          </div>
        ))}
        {object?.map((i) => (
          <div key={Math.random()}>
            <MyMarker
              coordinates={i.point.coordinates}
              all={i}
              type={i.type}
              title={i.title}
              address={i.address}
              id={i.id}
            ></MyMarker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
});
