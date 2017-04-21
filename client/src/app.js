// var MapWrapper = require('./map_wrapper.js')
var UpcomingGames = require('./upcoming_games.js')

var UpcomingGamesView = require('./upcoming_games_view.js')

window.onload = function(){

  var upcomingGames = new UpcomingGames('http://api.football-data.org/v1/competitions/426/fixtures')


  upcomingGames.getData(function(games){
    console.log(games)
    var list = document.querySelector('ul')
    var upcomingGamesView = new UpcomingGamesView(list, games)
    upcomingGamesView.populate();
  })

}