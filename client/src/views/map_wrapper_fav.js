var MapInit = require('../models/map_init.js')

var MapWrapperFav = function(coords, map) {
  this.coords = coords
  this.map = map
}

MapWrapperFav.prototype = {

    render: function(favouritesCoordinates) {
        
      favouritesCoordinates.forEach(function(stadiumCoordinates){
          var coords = stadiumCoordinates.coords
          var marker = new google.maps.Marker({
            position: coords,           
            map: map,
            animation: google.maps.Animation.DROP
      })

      marker.setMap(map);
      
      // marker.setMap(null);    
          
      marker.addListener('click', function(){
          if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
          } else { 
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          })
      }.bind(this))

      map.addListener('center_changed', function() {
        window.setTimeout(function() {
          map.panTo({lat: 53.5, lng: -3});
        }, 2000);
      })
  }
}

module.exports = MapWrapperFav