let map;
let service;
let infowindow;

const inputEmail = document.getElementById("inputEmail");
const searchButton = document.getElementById("searchButton");

// searchButton.addEventListener("click", (e) => {
//   e.preventDefault();
//     const inputEmail = document.getElementById("inputEmail");
//     searchInput(inputEmail)
// });

initMap();
function initMap(place) {
    console.log(place);
  const london = new google.maps.LatLng(51.507351, -0.127758);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: london,
    zoom: 6,
  });
  const request = {
    query: "london",
    fields: ["name", "geometry", "photos"],
  };
    
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}
function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}