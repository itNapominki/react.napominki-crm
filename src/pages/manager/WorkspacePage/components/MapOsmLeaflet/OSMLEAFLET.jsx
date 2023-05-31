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
import { loadingData } from "./utils";

export default function OSMLEAFLET(props) {
  const position = [55.767193, 37.608239];

  const icon = L.icon({
    iconUrl: "./placeholder.png",
    iconSize: [38, 38],
  });
  const locationSelection = [55.768193, 37.609239];
  console.log("render osm");

  // запрос данных по ресторанам
  const restaurantData = loadingData("restaurant", {
    attributes: ["id", "title", "address", "isPublished", "point"],
    order: [["title", "ASC"]],
  });
  // запрос данных по остальным объектам
  const objectData = loadingData("object", {
    order: [
      ["type", "ASC"],
      ["title", "ASC"],
    ],
  });

  console.log(restaurantData[0].rows);
  console.log(objectData[0].rows);

  console.log("render");

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
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {restaurantData[0].rows?.map((i) => (
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

        {objectData[0].rows?.map((i) => (
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
}
