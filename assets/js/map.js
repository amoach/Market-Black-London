const locations = [
  { lat: 51.469801, lng: -0.068252, 
    message: "The African brand incubator"}, //Bidhaar
  { lat: 51.478724, lng: -0.025797,
    message: "Industrial-chic bar serving island-inspired bar bites & cocktails, along with live music" }, //Buster Mantis
  { lat: 51.533433, lng: -0.057119 }, //Yo Crackers
  { lat: 51.523929, lng: -0.071636 }, //Dark Sugars
  { lat: 51.480937, lng: -0.000843 }, //Dark Sugars
  { lat: 51.584615, lng: -0.076235 }, //Uncle John's Bakery
  { lat: 51.462206, lng: -0.111581 }, //Round Table Books
  { lat: 51.466241, lng: -0.066484 }, //Sage Flowers
  { lat: 51.549469, lng: -0.054751 }, //The Black Butcher
];


// let map;
// let service;
// let infowindow;


// const inputEmail = document.getElementById("inputEmail");
// const searchButton = document.getElementById("searchButton");

// // searchButton.addEventListener("click", (e) => {
// //   e.preventDefault();
// //     const inputEmail = document.getElementById("inputEmail");
// //     searchInput(inputEmail)
// // });

// initMap();
// function initMap(place) {
//     console.log(place);
//   const london = new google.maps.LatLng(51.507351, -0.127758);
//   infowindow = new google.maps.InfoWindow();
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: london,
//     zoom: 10,
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

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 12,
//     center: { lat: 51.507351, lng: -0.127758 },
//   });
//   // Create an array of alphabetical characters used to label the markers.
//   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   const markers = locations.map((location, i) => {
//     return new google.maps.Marker({
//       position: location,
//       label: labels[i % labels.length],
//     });
//   });
//   // Add a marker clusterer to manage the markers.
//   new MarkerClusterer(map, markers, {
//     imagePath:
//       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
//   });
// }

// var markerCluster = new MarkerClusterer(map, markers,
//             {imagePath: `${path}/m`});
// ----------------------------------------------------------------
// function initMap() {
//   const bidhaar = { lat: 51.469801, lng: -0.068252 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 11,
//     center: bidhaar,
//   });
//   const contentString =
//     '<div id="content">' +
//     '<div id="siteNotice">' +
//     "</div>" +
//     '<h1 id="firstHeading" class="firstHeading">Bidhaar</h1>' +
//     '<div id="bodyContent">' +
//     "<p><b>Bidhaar</b>, The African brand incubator </p> " +
//     "</div>" +
//     "</div>";
//   const infowindow = new google.maps.InfoWindow({
//     content: contentString,
//   });
//   const marker = new google.maps.Marker({
//     position: bidhaar,
//     map,
//     title: "Bidhaar",
//   });
//   marker.addListener("click", () => {
//     infowindow.open(map, marker);
//   });
// }

// function initMap() {
//   const busterMantis = { lat: 51.478724, lng: -0.025797 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 11,
//     center: busterMantis,
//   });
//   const contentString =
//     '<div id="content">' +
//     '<div id="siteNotice">' +
//     "</div>" +
//     '<h1 id="firstHeading" class="firstHeading">Buster Mantis</h1>' +
//     '<div id="bodyContent">' +
//     "<p><b>Bidhaar</b>Industrial-chic haunt serving creative cocktails & island-inspired bar bites, plus live music</p> " +
//     "</div>" +
//     "</div>";
//   const infowindow = new google.maps.InfoWindow({
//     content: contentString,
//   });
//   const marker = new google.maps.Marker({
//     position: busterMantis,
//     map,
//     title: "Buster Mantis",
//   });
//   marker.addListener("click", () => {
//     infowindow.open(map, marker);
//   });
// }

// ------------------------------------------------------------------------

// for (i = 0; i < locations.length; i++) {
//     marker = new google.maps.Marker({
//         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//         map: map
//     });

//     google.maps.event.addListener(marker, 'click', (function(marker, i) {
//         return function() {
//             infowindow.setContent(locations[i][0]);
//             infowindow.open(map, marker);
//         }
//     })(marker, i));
// }