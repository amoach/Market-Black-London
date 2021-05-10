// my marker locations
const locations = [
    {
        name: "<b>Bidhaar</b>",
        lat: 51.469801, lng: -0.068252,
        message: "<b>Bidhaar</b> The African brand incubator",
        image: "bidhaar-map.jpg"
    },
    {
        name: "<b>Buster Mantis</b>",
        lat: 51.478724, lng: -0.025797,
        message: "<b>Buster Mantis</b> Industrial-chic bar serving island-inspired bar bites & cocktails, along with live music",
        image: "buster-m.jpg"
    },
    {
        name: "<b>Yo Crackers</b>",
        lat: 51.533433, lng: -0.057119,
        message: "<b>Yo Crackers</b> Personalized stationary and greeting cards",
        image: "yo-m.jpg"
    },
    {
        name: "<b>Dark Sugars</b>",
        lat: 51.523929, lng: -0.071636,
        message: "<b>Dark Sugars</b> Premium chocolate made from cocoa beans directly from Ghana",
        image: "darks-m.jpg"
    },
    {
        name: "<b>Dark Sugars</b>",
        lat: 51.480937, lng: -0.000843,
        message: "<b>Dark Sugars</b> Premium chocolate made from cocoa beans directly from Ghana",
        image: "darks-m.jpg"
    },
    {
        name: "<b>Uncle John's Bakery</b>",
        lat: 51.584615, lng: -0.076235,
        message: "<b>Uncle John's Bakery</b> Local freshly baked goods",
        image: "uncle-m.jpg"
    }, 
    {
        name: "Round Table Books",
        lat: 51.462206, lng: -0.111581,
        message: "Yo Crackers: personalized stationary and greeting cards",
        image: "bidhaar-map.jpg"
    },
    {
        name: "Sage Flowers",
        lat: 51.466241, lng: -0.066484,
        message: "Yo Crackers: personalized stationary and greeting cards",
        image: "bidhaar-map.jpg"
    },
    {
        name: "The Black Butcher",
        lat: 51.549469, lng: -0.054751,
        message: "Yo Crackers: personalized stationary and greeting cards",
        image: "bidhaar-map.jpg"
    },
];

// create map tiles provided by ArcGIS and Esri
let mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

// generate the map using the mapTileLayers above, using London as the centre
let map = L.map("map", {
    layers: [mapTileLayers],
    center: [51.526, -0.055],
    zoom: 11
});

// loop over all locations from the "locations" array above
locations.forEach(location => {
    // build each marker location and add to 'map'
    let marker = L.marker([location.lat, location.lng]).addTo(map);
    
    // hover tooltip
    marker.bindTooltip(location.name);

    // infoWindow with image
    marker.bindPopup(location.message + "<br><img src='assets/images/map-images/" + location.image + "' class='marker-image'>");

    // open the pop-up once clicked
    $(location).on("click", function() {
        marker.openPopup();
    });
});
