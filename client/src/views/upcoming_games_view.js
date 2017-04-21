var UpcomingGamesView = function(){
  this.list = document.querySelector('#nextWeekGames')
}

UpcomingGamesView.prototype = {

  render: function() {

    console.log('rendering scheduled games')

    this.games.fixtures.forEach(function(fixtures){
      if (games.status === 'SCHEDULED') return
      var ul = document.createElement('ul')
      ul.innerText = games.homeTeamName;
      this.list.appendChild(ul)
    }.bind(this))
  }

}

module.exports = UpcomingGamesView;