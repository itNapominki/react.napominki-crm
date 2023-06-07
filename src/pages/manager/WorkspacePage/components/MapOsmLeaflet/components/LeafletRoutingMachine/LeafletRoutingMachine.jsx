import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

import marcer2 from "../../../../../../../assets/icon/marker-metro.svg";

export default function LeafletRoutingMachine(props) {
  const { setFirstMarker, setSecondMarker, firstMarker, secondMarker, seTtimeAndDistanceAboutRoute } = props;

  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: marcer2,
    iconSize: [30, 50],
  });

  let redCircleIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // постановка первого маркера для визуализации маршрута + установка маркера в центр карты (его нужно удалить так как маркеры маршрута будут установлены свои)
  useEffect(() => {
    let marker1 = {};
    if (firstMarker != undefined) {
      marker1 = L.marker([firstMarker?.lat, firstMarker?.lon], {
        icon: redCircleIcon,
      }).addTo(map);
      //map.on("click", function (e) {
      //L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      //});

      // установка на центр первого маркера апи построении маршрута
      map.setView([firstMarker?.lat, firstMarker?.lon]);
    }
  }, [firstMarker, secondMarker]);

  useEffect(() => {
    if (secondMarker != null && secondMarker != undefined) {
      const route = L.Routing.control({
        waypoints: [          
          L.latLng(+firstMarker?.lat, +firstMarker?.lon, {icon: redCircleIcon}),          
          L.latLng(+secondMarker?.lat, +secondMarker?.lon, {icon: redCircleIcon}),
        ],

        //кастомизация маркера
        createMarker: function(i, wp, nWps) {
          if (i === 0 || i === nWps - 1) {            
            return L.marker(wp.latLng, {
              icon: redCircleIcon 
            });
          } else {            
            return L.marker(wp.latLng, {
              icon: redCircleIcon
            });
          }
        },        
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },       
        show: false, // отключаем информацию о маршруте
        routeWhileDragging: false,
        //geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false, // показывать альтернативный маршрут
      })
        // .on("routesfound", function (e) {
        //   e.routes[0].coordinates.forEach((c, i) => {
        //     setTimeout(() => {
        //       marker1.setLatLng([c.lat, c.lng]);
        //     }, 1000 * i);
        //   });
        // })

        .on('routesfound', function(event) {
          const routeInfo = document.getElementById('route-info');
          const distance = event.routes[0].summary.totalDistance / 1000; // расстояние в километрах
          const time = event.routes[0].summary.totalTime / 60; // время в минутах
          //routeInfo.innerHTML = `Расстояние: ${distance} км, Время: ${time} мин`;
          seTtimeAndDistanceAboutRoute({time: time, distance: distance})
          console.log(distance);
          console.log(time);
        })
        .addTo(map);
        return () => {
          // удаляем объект маршрута и карту при размонтировании компонента         
          route.remove();
        };
        
    }
  }, [secondMarker]);

  return null;
}
