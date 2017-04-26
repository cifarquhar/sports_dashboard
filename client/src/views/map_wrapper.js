var MapInit = require('../models/map_init.js')

var MapWrapper = function(coords, map) {
  this.coords = coords
  this.map = map
  this.markers = []
}

MapWrapper.prototype = {

  render: function(allCoordinates){
        
    // var clearMarkers = function(){
    //   marker.setMap(null)
    //   for (var i = 0; i < allCoordinates.length; i++) {
    //     addMarkerWithTimeout(neighborhoods[i], i * 200);
    //   }
    // }

    allCoordinates.forEach(function(stadiumCoordinates){
      var coords = stadiumCoordinates.coords

      var marker = new google.maps.Marker({
        position: coords,           
        map: map,
        animation: google.maps.Animation.DROP
      })

      marker.addListener('click', function(){
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else { 
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        })

      // marked.addListener('click', function(){

      // })

    }.bind(this))

    map.addListener('center_changed', function() {
      window.setTimeout(function() {
        map.panTo({lat: 53.5, lng: -3});
      }, 2000);
    })
  
  }
}

module.exports = MapWrapper