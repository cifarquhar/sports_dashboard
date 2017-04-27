var Fixture = require('./fixture.js')

var FavouritesList = function(mapWrapperFav) {
  this.favouritesFixtures = [],
  this.favouritesWithoutCoords = []
  this.mapWrapperFav = mapWrapperFav
  this.getData(function(){})
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
    var self = this
    this.makeRequest('GET', 'http://localhost:3000/api/favourites', function(){
      if(this.status !== 200) return
      var jsonFavs = this.responseText
      self.favouritesFixtures = JSON.parse(jsonFavs)
      callback(self.favouritesFixtures)
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
      console.log('Delete method',favourites)
      callback(favourites)
    }, JSON.stringify(fixture))
  },

  favouritesCoordinates: function(callback) {

    var visibleFavouritesHomeTeamNamesStorage = JSON.parse(localStorage.getItem('storedFavouriteGames')) || []

    console.log(visibleFavouritesHomeTeamNamesStorage)

    var request = new XMLHttpRequest()
    request.open('GET', "http://localhost:3000/api/fixtures")
    
    request.onload = function(){
      var jsonString = this.responseText;
      this.fixturesWithCoords = JSON.parse(jsonString);

      console.log('Local api objects',this.fixturesWithCoords)

      var favouritesToRender = this.fixturesWithCoords.filter(function(fixture){
          return visibleFavouritesHomeTeamNamesStorage.includes(fixture.homeTeamName) 
        })

      console.log("Before callback", favouritesToRender)

      callback(favouritesToRender)

    }
    request.send()
  },

  addData: function(fixture, callback) {
    for (var i = 0; i < this.favouritesFixtures.length; i++) {
      if ((this.favouritesFixtures[i].homeTeamName === fixture.homeTeamName) && (this.favouritesFixtures[i].awayTeamName === fixture.awayTeamName)) return
    }
    this.favouritesFixtures.push(fixture)
    this.makeRequest('POST', 'http://localhost:3000/api/favourites', callback, JSON.stringify(fixture))
    console.log(this.favouritesFixtures)
  }
}

module.exports = FavouritesList