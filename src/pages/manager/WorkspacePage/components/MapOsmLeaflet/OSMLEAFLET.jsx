import {
  AttributionControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { filtringData, initialData, loadingData } from "./utils";
import React, { memo, useEffect, useMemo, useState } from "react";
import MyMarker from "./MyMarker";
import searchMarcer from "../../../../../assets/icon/marker-pin.svg";
import { LeafletRoutingMachine } from "./components";

export default React.memo(function OSMLEAFLET({
//export default function OSMLEAFLET({
  datVisibleObjects,
  setModalFor,
  selectPosition,
  setFirstMarker,
  setSecondMarker,
  firstMarker,
  secondMarker,
  radiusFilter,
  seTtimeAndDistanceAboutRoute
}) {
  const [centrMap, setCentrMap] = useState([55.767193, 37.608239]);
  const [circle, setCircle] = useState(null);
  
  // установка центра при первой загрузке
  const position = [55.767193, 37.608239];

  // постановка маркера после поиска
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  // стилизация маркера поиска
  const icon = L.icon({
    iconUrl: searchMarcer,
    iconSize: [46, 60],
    iconAnchor: [23, 60],
  });

  // запрос данных по ресторанам
  const loadRestaurantData = loadingData("restaurant", {
    limit: 10000,
    attributes: ["id", "title", "address", "isPublished", "point", "priority"],
    order: [["title", "ASC"]],
  });

  // запрос данных по остальным объектам
  const loadObjectData = loadingData("object", {
    limit: 10000,
    order: [
      ["type", "ASC"],
      ["title", "ASC"],
    ],
  });  

  // фильтрация объектов (кладбища, морги, крематорий)
  const filterObjectData = filtringData(loadObjectData, datVisibleObjects);
  // отфильтровываем не опубликованные рестораны
  const isPublishedRestaurantData = loadRestaurantData?.filter(i => i.isPublished !== false);  

  // убираем круговой фильтр
  useEffect(() => {
    if (radiusFilter.status != "CREATING") {
      setCircle(null);
    }
  }, [radiusFilter]);

  // контейнер который слушает местоположение нажатия для постановки кругового фильтра
  const MapEvents = () => {
    if (radiusFilter.status === "CREATING") {
      useMapEvents({
        click(e) {
          const newCircle = (
            <Circle
              center={[e.latlng.lat, e.latlng.lng]}
              pathOptions={{ fillColor: "blue" }}
              radius={radiusFilter.radius}
            />
          );

          setCircle(newCircle);
        },
      });
      return false;
    }
  };

  // установка маркера на центр при поиске адреса
  const RecenterAutomatically = () => {
    if (selectPosition != null) {
      const map = useMap();
      useEffect(() => {
        map.setView([+selectPosition.lat, +selectPosition.lon]);
      }, [selectPosition]);
      return null;
    }
  };

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
        center={centrMap}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapEvents />
        <RecenterAutomatically></RecenterAutomatically>
        {circle}
        {selectPosition && (
          <Marker position={locationSelection} icon={icon}>
            <Popup>Точка поиска</Popup>
          </Marker>
        )}
        {isPublishedRestaurantData?.map((i) => (
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
        {filterObjectData?.map((i) => (
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
        <LeafletRoutingMachine
        seTtimeAndDistanceAboutRoute={seTtimeAndDistanceAboutRoute}
          setFirstMarker={setFirstMarker}
          setSecondMarker={setSecondMarker}
          firstMarker={firstMarker}
          secondMarker={secondMarker}
        />
      </MapContainer>
    </div>
  );
})
