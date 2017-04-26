var MapInit = require('../models/map_init.js')

var MapWrapper = function(coords, map) {
  this.coords = coords
  this.map = map
}

MapWrapper.prototype = {

  render: function(allCoordinates){

    allCoordinates.forEach(function(stadiumCoordinates){
      var coords = stadiumCoordinates.coords
      var name = stadiumCoordinates.homeTeamName
      var stadium = stadiumCoordinates.stadium

      var marker = new google.maps.Marker({
        position: coords,           
        map: map,
        animation: google.maps.Animation.DROP
      })


      var contentString = '<p style="color: black">Home Team: ' + name + '</p><p style="color: black">Stadium: ' + stadium + '</p>' 
        

      marker.addListener('click', function(){

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

    map.addListener('center_changed', function() {
      window.setTimeout(function() {
        map.panTo({lat: 53.5, lng: -3});
      }, 2000);
    })
  
  }
}

module.exports = MapWrapper