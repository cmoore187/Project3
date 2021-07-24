var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;

function createMap(meteorites)
{
  var map = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
  });


//Create a baseMaps object to hold the map layer
  var baseMaps = {
  "Map": map
  };

// Create an overlayMaps object to hold the meteorites layer
  var overlayMaps = {
  "Meteorites": meteorites
  };

// Create the map object with options
  var myMap = L.map("map-id", {

  center: newYorkCoords,
  zoom: 2,
  layers: [map, meteorites]
  });

 // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
  }).addTo(myMap);
}

// Create the createMarkers function
function createMarkers(response)
{
  // pull the stations property from the API call
  var markers = [];
  //console.log(response);
  response.forEach(element => {
    var marker = L.marker([element.reclat, element.reclong])
                 .bindPopup(element.name + "<hr> Mass" + element.mass);
    markers.push(marker);
  });
     createMap(L.layerGroup(markers));
 }

d3.json("../Data/meteorites.json").then((createMarkers));
  


