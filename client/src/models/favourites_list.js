var Fixture = require('./fixture.js')

var visibleFavouritesStorage = JSON.parse(localStorage.getItem('storedFavouriteGames')) || []

var FavouritesList = function(mapWrapperFav) {
  this.favouritesFixtures = [],
  this.favouritesWithoutCoords = []
  this.mapWrapperFav = mapWrapperFav
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
      var jsonFavs = this.responseText
      var favourites = JSON.parse(jsonFavs)
      callback(favourites)
    })
  },

  // add: function(fixture, callback) {
  //   this.makeRequest('POST', 'http://localhost:3000/api/favourites', callback, JSON.stringify(fixture))
  // },

  delete: function(fixture, callback) {
    var url = 'http://localhost:3000/api/favourites/' + fixture._id
    this.makeRequest('DELETE', url, function() {
      if (this.status !== 200) return
      var jsonFavs = this.responseText
      var favourites = JSON.parse(jsonFavs)
      callback(favourites)
    }, JSON.stringify(fixture))

  },

  favouritesCoordinates: function(callback) {
    var request = new XMLHttpRequest()
    request.open('GET', "http://localhost:3000/api/fixtures")
    
    request.onload = function(){
      var jsonString = this.responseText;
      this.fixturesWithCoords = JSON.parse(jsonString);

      var favouritesToRender = this.fixturesWithCoords.filter(function(fixture){
        return visibleFavouritesStorage.includes(fixture.homeTeamName) 
      })
    callback(favouritesToRender)

    console.log(favouritesToRender)

    }
    request.send()
  }
}

module.exports = FavouritesList