var Fixture = require('./fixture.js')

var FixturesList = function() {
  this.fixtures = null
  this.fixturesWithCoords = null
}

FixturesList.prototype = {

  makeRequest: function(requestType, url, callback){
          var request = new XMLHttpRequest()
          request.open(requestType, url)
          request.setRequestHeader('X-Auth-Token', '3fbc8336da93422fa82dc90ab1808606')
          request.onload = callback
          request.send()
    },

  getData: function(callback) {
      this.makeRequest('GET', 'http://api.football-data.org/v1/competitions/426/fixtures', function(){
        if(this.status !== 200) return
        var jsonFavs = this.responseText
        var fixtures = JSON.parse(jsonFavs)
        this.fixtures = fixtures
        callback(fixtures)
      })
    },

  all: function(callback){
    var self = this; 
    this.makeRequest("http://localhost:3000/api/fixtures", function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var fixture = self.populateFixtures(results);
      callback(fixture);
    })
  },

  populateFixtures: function(results){
    var fixture = results.map(function(result){
      return new Fixture(result);

    })

    return fixture;
  },

  add: function(newFixture, callback){
    console.log("adding fixture");
    this.makePostRequest("http://localhost:3000/api/fixtures", callback, JSON.stringify(newFixture));
  },

  allCoordinates: function(callback){
    //QUERY API DATA IN DATABASE
    var request = new XMLHttpRequest()
    request.open('GET', "http://localhost:3000/api/fixtures")
    
    request.onload = function(){
      var jsonString = this.responseText;
      this.fixturesWithCoords = JSON.parse(jsonString);
      callback(this.fixturesWithCoords)
    }

    request.send()

    }

    // findUpcomingGames: function(allFixtures) {
    //   var dateToday = new Date()
    //   var nextWeek = new Date(dateToday.getTime() + 7 * 24 * 60 * 60 * 1000)
    //   this.scheduledFixtures = allFixtures.filter(function(fixture) {
    //     return (new Date(fixture.date) > dateToday) && (new Date(fixture.date) < nextWeek)
    //   })
  }


module.exports = FixturesList