var MapInit = require('../models/map_init.js')

var MapWrapper = function(coords, map) {
  this.coords = coords
  this.map = map
}


MapWrapper.prototype = {

    render: function(allCoordinates) {
        
      allCoordinates.forEach(function(stadiumCoordinates){
          var coords = stadiumCoordinates.coords
          var marker = new google.maps.Marker({
            position: coords,           
            map: map
      })
          marker.addListener('click', function(){
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else { 
                marker.setAnimation(google.maps.Animation.BOUNCE);
              }
            })
    }.bind(this))
  }

  // onClickEventInfoBox: function() {
  //   google.maps.event.addListener(this.googleMap, 'click', function(event){
  //     var position =   {
  //             lat: 56.0, 
  //             lng: -4.0
  //             // lat: event.latLng.lat(), 
  //             // lng: event.latLng.lng()
  //           }
  //           this.addMarker(position);
  //   }.bind(this));
  // }
}

module.exports = MapWrapper