var MapWrapper = function () {

  var coords = {lat: 56.0, lng: -4.0}; 

  var container = document.getElementById('map');

  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: 6,
    styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ]
    });
}

MapWrapper.prototype = {

  setMarker: function(){
    var marker = new google.maps.Marker({
      position: {lat: 56.0, lng: -4.0},           
      map: this.googleMap
    });
    marker.addListener('click', this.toggleBounce);
  },

  toggleBounce: function(){
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else { 
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
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