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

// initMap();
// function initMap(place) {
//     console.log(place);
//   const london = new google.maps.LatLng(51.507351, -0.127758);
//   infowindow = new google.maps.InfoWindow();
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: london,
//     zoom: 6,
//   });
//   const request = {
//     query: "london",
//     fields: ["name", "geometry", "photos"],
//   };
    
//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//       console.log(results);
//       for (let i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }
// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;
//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//   });
//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.setContent(place.name || "");
//     infowindow.open(map);
//   });
// }



function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: -28.024, lng: 140.887 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
];

var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: `${path}/m`});