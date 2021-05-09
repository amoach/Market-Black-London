// my marker locations
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

// create map tiles provided by ArcGIS and Esri
let mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

// generate the map using the mapTileLayers above, using London as the centre
let map = L.map("map", {
    layers: [mapTileLayers],
    center: [51.507351, -0.127758],
    zoom: 10
});

// loop over all locations from the "locations" array above
locations.forEach(location => {
    let marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindTooltip(location.message);
});
