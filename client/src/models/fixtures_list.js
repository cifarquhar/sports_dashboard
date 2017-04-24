var Fixture = require('./fixture.js')

var FixturesList = function() {
  this.fixtures = null
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
    this.makePostRequest("http://localhost:3000/api/fixture", callback, JSON.stringify(newFixture));
  }

}


module.exports = FixturesList