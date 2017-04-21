// var MapWrapper = function (container, coords, zoom) {
//   this.googleMap = new google.maps.Map(container, {
//     center: coords, 
//     zoom: 12
//   });
// }

// MapWrapper.prototype = {

//   addMarker: function(coords){
//     var marker = new google.maps.Marker({
//       position: coords,           // stadium coords
//       mpa: this.googleMap
//     });
//   },

//   onClickEventInfoBox: function(){
//     google.maps.event.addListener(this.googleMap, 'click', function(event){
//       var position = {
//         lat: event.latLng.lat(),  // stadium coords
//         lng: event.latLng.lng()   // stadium coords
//       }
//       this.addMarker(position);
//     }.bind(this));
//   }
// }