function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {lat: 52.420782, lng: -1.763291}
    });
    
    var coverageCircle = new google.maps.Circle({
      strokeColor: '#0e2f63',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0e2f63',
      fillOpacity: 0.05,
      map: map,
      center: {lat: 52.420782, lng: -1.763291},
      radius: 8000
    });
}

