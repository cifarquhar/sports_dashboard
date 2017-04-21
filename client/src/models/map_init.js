var MapInit = function() {
  this.url = new google.maps.Map(document.getElementById('map')
}

MapInitView.prototype = {

  initializeMap: function() {
      var center = {lat: 53.3029819, lng: -0.8};
        var container = document.getElementById('map');
        var mainMap = new MapWrapper(container, center, 10);
        mainMap.addMarker(center);
        mainMap.onClickEventInfoBox();
    }
}

module.exports = MapInit