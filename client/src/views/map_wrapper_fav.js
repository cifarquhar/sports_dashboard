var MapInit = require('../models/map_init.js')

var MapWrapperFav = function(coords, map) {
  this.coords = coords
  this.map = map
  this.markers = [];
}

MapWrapperFav.prototype = {

    render: function(favouritesCoordinates) {
      

      favouritesCoordinates.forEach(function(stadiumCoordinates){
      var coords = stadiumCoordinates.coords
      var name = stadiumCoordinates.homeTeamName
      var stadium = stadiumCoordinates.stadium

      var marker = new google.maps.Marker({
        position: coords,           
        map: map,
        animation: google.maps.Animation.DROP
      })
      this.markers.push(marker)

      console.log(this.markers.length)
      
      var contentString = '<p style="color: black">Home Team: ' + name + '</p><p style="color: black">Stadium: ' + stadium + '</p>' 
       
      marker.addListener('click', function(){

        map.setCenter(marker.getPosition());
        map.setZoom(10);


        var infowindow = new google.maps.InfoWindow({
              content: contentString
          })

          infowindow.open(map, marker)
          setTimeout(function() {infowindow.close(map, marker)}, 2000)


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

  clearMarkers: function() {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null)
    }
  }
}

module.exports = MapWrapperFav