var UpcomingGamesView = function(list, games){
  this.list = list
  this.games = games
}

UpcomingGamesView.prototype = {

  populate: function() {
    this.games.fixtures.forEach(function(games){
      if (games.status === 'FINISHED') return
      var ul = document.createElement('ul')
      ul.innerText = games.homeTeamName;
      this.list.appendChild(ul)
    }.bind(this))
  }

}

module.exports = UpcomingGamesView;