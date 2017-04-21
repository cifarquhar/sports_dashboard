var FixturesList = function() {}

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
        callback(fixtures)
      })
    }

}

module.exports = FixturesList