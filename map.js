function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {lat: 2.411630, lng: -1.778176}
    });
    
   var coverage = {
        lat: 2.411630,
        lng: -1.778176
    };
    
    var coverageCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: coverage,
      radius: 8000
    });
}