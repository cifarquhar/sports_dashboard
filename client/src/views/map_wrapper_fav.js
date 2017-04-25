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
}

module.exports = MapWrapperFav