var Fixture = require('./fixture')

var FavouritesList = function() {
  this.favouritesFixtures = []
}

FavouritesList.prototype = {

  makeRequest: function(requestType, url, callback, payload){
        var request = new XMLHttpRequest()
        request.open(requestType, url)
        if (payload) { 
          request.setRequestHeader('Content-Type','application/json')
          request.onload = callback
          request.send(payload)
        } else {
          request.onload = callback
          request.send()
        }
  },

  getData: function(callback) {
    this.makeRequest('GET', 'http://localhost:3000/api/favourites', function(){
      if(this.status !== 200) return
      var jsonFavs = request.responseText
      var favourites = JSON.parse(jsonFavs)
      this.createFixtures(favourites)
      callback(this.favouritesFixtures)
    }.bind(this))
  },

  add: function(fixture, callback) {
    this.makeRequest('POST', 'http://localhost:3000/api/favourites', callback, JSON.stringify(fixture))
  },

  createFixtures: function(favourites) {
    for (var favourite of favourites) {
      var fixture = new Favourite(favourite)
      this.favouritesFixtures.push(fixture)
    }
  }
}

module.exports = FavouritesList