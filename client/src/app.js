var app = function(){
  var coords = {lat: 56.0, lng: -4.0};

  var container = document.getElementById('map-view');

  //this.container = document.getElementById('map')
  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: 12
  });
 /* var target = window.location.href
  var base = path.basename(target)
  new UI(base)*/
}
window.onload = app