import styles from './ClientMapFromOSM.module.scss'
import React, { useState } from "react";

import { classNames } from "utils";
import L from "leaflet";
import {  
  MapContainer,
  Marker, 
  TileLayer,  
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import cafe from "../../assets/icon/marker-cafe.svg";

export default function ClientMapFromOSM({ className, points }) {
  if (points.length === 0) {
    return;
  }

  const [centrMap, setCentrMap] = useState(points[0].coordinates);

  let DefaultIcon = L.icon({
    iconUrl: cafe,
    iconSize: [46, 60],
    iconAnchor: [23, 60],
  });

  return (
    <div
    className={classNames(styles.container, [className])}
    >
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
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={points[0].coordinates} icon={DefaultIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  );
}
