var FavouritesList = function() {}

FavouritesList.prototype = {

  makeRequest: function(requestType, url, callback){
        var request = new XMLHttpRequest()
        request.open(requestType, url)
        request.onload = callback
        request.send()
  },

  getData: function(callback) {
    this.makeRequest('GET', 'http://localhost:3000/api/favourites', function(){
      if(this.status !== 200) return
      var jsonFavs = this.responseText
      var favourites = JSON.parse(jsonFavs)
      callback(favourites)
    })
  }
}

module.exports = FavouritesList