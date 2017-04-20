var FavouritesList = function() {}

FavouritesList.prototype = {

  makeRequest: function() {
    function(requestType, url, callback){
        var request = new XMLHttpRequest()
        request.open(requestType, url)
        request.onload = callback
        request.send()
      }
  },

  all: function() {
    this.makeRequest('GET', 'http://localhost:3000/api/favourites', function(){
      if(this.status !==200) return
      var jsonFavs = this.responseText
      var favourites = JSON.parse(jsonFavs)
      callback(favourites)
    })
  }
}