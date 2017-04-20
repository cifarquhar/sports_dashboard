var LeagueTable = function(){
  this.url = "http://api.football-data.org/v1/competitions/426/leagueTable"
}

LeagueTable.prototype = {
    getData: function(callback){
      var request = new XMLHttpRequest()
      request.open("GET",this.url)
      request.onload = function(){
        if (request.status === 200){
          var jsonString = request.responseText
          this.table = JSON.parse(jsonString)
          callback(this.table)
        }
      }.bind(this)
      request.send()
    }
}


module.exports = LeagueTable