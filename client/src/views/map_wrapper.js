// var MapWrapper = function (container, coords, zoom) {
//   this.googleMap = new google.maps.Map(container, {
//     center: coords, 
//     zoom: 12
//   });
// }

// MapWrapper.prototype = {

//   addMarker: function(coords){
//     var marker = new google.maps.Marker({
//       position: coords,
//       mpa: this.googleMap
//     });
//   },

//   addClickEvent: function(){
//     google.maps.event.addListener(this.googleMap, 'click', function(event){
//       var position = {
//         lat: event.latLng.lat(),
//         lng: event.latLng.lng()
//       }
//       this.addMarker(position);
//     }.bind(this));
//   }
// }