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

    var CenterControl = function(controlDiv, map) {

      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to recenter the map';
      controlDiv.appendChild(controlUI);

      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = 'Center Map';
      controlUI.appendChild(controlText);

      controlUI.addEventListener('click', function() {
          map.setCenter(this.coords);
        });
    }

    var centerControlDiv = document.createElement('div');
      var centerControl = new CenterControl(centerControlDiv, map);

      centerControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);  
  }
}

module.exports = MapWrapper