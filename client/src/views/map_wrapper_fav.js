var MapInit = require('../models/map_init.js')

var MapWrapperFav = function(coords, map) {
  this.coords = coords
  this.map = map
}

MapWrapperFav.prototype = {

    render: function(favouritesCoordinates) {
      

      favouritesCoordinates.forEach(function(stadiumCoordinates){
          var coords = stadiumCoordinates.coords
          var name = stadiumCoordinates.homeTeamName

          var marker = new google.maps.Marker({
            position: coords,           
            map: map,
            animation: google.maps.Animation.DROP
          })
          
      var contentString = 
         '<h3 style="color:black;">Team:</h3>' +
         '<h3 style="color:black;">'+name+'</h3>'       
      

      marker.addListener('click', function(){

        map.setCenter(marker.getPosition());
        map.setZoom(7);


        var infowindow = new google.maps.InfoWindow({
              content: contentString
          })

          infowindow.open(map, marker)
          setTimeout(function() {infowindow.close(map,marker)}, 2000)


          if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
          } else { 
              marker.setAnimation(google.maps.Animation.BOUNCE);
              setTimeout(function() {
                      marker.setAnimation(null)
                  }, 1500);
            }
          })
      }.bind(this))
  },
}

module.exports = MapWrapperFav