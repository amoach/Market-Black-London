
/*function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: 46.619261,
                lng: -33.134766
            }
        });*/

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: { lat: 46.619261, lng: -33.134766 },
});

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
    }

    const locations = [
        { lat: 51.469801, lng: -0.068252 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
    ];
