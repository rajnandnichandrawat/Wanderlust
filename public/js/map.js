// console.log("Coordinates:", coordinates);
// console.log("Is Array:", Array.isArray(coordinates));

const map = new mapboxgl.Map({
    accessToken: mapToken,
    style: "mapbox://styles/mapbox/streets-v12",
    container: "map",
    center: listing.geometry.coordinates,
    zoom: 12
});

map.on("load", () => {
    console.log("Map loaded successfully!");

    new mapboxgl.Marker({ color: 'red'})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h4>${listing.location}</h4><p>Exact Location wii be Provided after booking!!!</p>`))
        .addTo(map);
});