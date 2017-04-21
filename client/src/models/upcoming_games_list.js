var UpcomingGamesList = function(){
  this.url = 'http://api.football-data.org/v1/competitions/426/fixtures'
}


UpcomingGamesList.prototype = {

  getData: function(callback){

    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.setRequestHeader('X-Auth-Token', '3fbc8336da93422fa82dc90ab1808606')

    request.onload = function () {
      if (request.status !== 200) return;
        var jsonString = request.responseText;
        var games = JSON.parse(jsonString);
        callback(games); 
    };
  
    request.send();
  },

}

module.exports = UpcomingGames;