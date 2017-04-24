var MapWrapper = function () {

  var coords = {lat: 56.0, lng: -4.0};

  var container = document.getElementById('map');

  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: 7
  });

}

MapWrapper.prototype = {

  addMarker: function(){
    var marker = new google.maps.Marker({
      position: {lat: 56.0, lng: -4.0},           
      map: this.googleMap
    });
  },

  onClickEventInfoBox: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = {
              lat: 56.0, 
              lng: -4.0
              // lat: event.latLng.lat(), 
              // lng: event.latLng.lng()
            }
            this.addMarker(position);
    }.bind(this));
  }
}


module.exports = MapWrapper