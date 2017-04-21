var MapWrapper = function (coords, zoom) {
  var container = document.getElementById('map');

  //this.container = document.getElementById('map')
  this.googleMap = new google.maps.Map(container, {
    coords: coords, 
    zoom: 12
  });
}

MapWrapper.prototype = {

  // addMarker: function(coords){
  //   var marker = new google.maps.Marker({
  //     position: coords,           // uk coords
  //     mpa: this.googleMap
  //   });
  // },

  // onClickEventInfoBox: function(coords) {
  //   google.maps.event.addListener(this.googleMap, 'click', function(event){
  //     var position = {
  //             lat: event.latLng.lat(),  // uk coords
  //             lng: event.latLng.lng()   // uk coords
  //           }
  //           this.addMarker(position);
  //   }.bind(this));
  // }
}

module.exports = MapWrapper