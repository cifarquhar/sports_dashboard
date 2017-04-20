var FavouritesList = function() {}

FavouritesList.prototype = {

  makeRequest: function() {
    function(requestType, url, callback){
        var request = new XMLHttpRequest()
        request.open(requestType, url)
        request.onload = callback
        request.send()
      }
  }

}