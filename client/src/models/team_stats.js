var TeamStats = function(){
  this.url = "http://api.football-data.org/v1/competitions/426/teams"
}

TeamStats.prototype = {
    getData: function(callback){
      var request = new XMLHttpRequest()
      request.open("GET",this.url)
      request.setRequestHeader('X-Auth-Token', '3fbc8336da93422fa82dc90ab1808606')
      request.onload = function(){
        if (request.status === 200){
          var jsonString = request.responseText
          this.teamList = JSON.parse(jsonString)
          callback(this.teamList)
        }
      }.bind(this)
      request.send()
    }
}


module.exports = TeamStats
