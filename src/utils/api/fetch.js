const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

// поиск объекта на карте OSM и возврат вариантов точных адресов с координатами
export default function handleSearchWithoutSettings(searchText) {
  // Search
  const params = {
    q: searchText,
    format: "json",
    addressdetails: 1,
    polygon_geojson: 0,
  };
  const queryString = new URLSearchParams(params).toString();
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
 return fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      //console.log(JSON.parse(result));
      //setListPlace(JSON.parse(result));
      //setVisibleListAdress(true);
      return JSON.parse(result)
    })
    .catch((err) => console.log("err: ", err));
}