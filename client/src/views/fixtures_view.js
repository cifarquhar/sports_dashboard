var FixturesView = function() {
  this.element = document.querySelector('#fixtures')
}

FixturesView.prototype = {

  render: function(fixtures) {
    console.log('favs: ', fixtures)
    var fixturesArray = fixtures.fixtures
    var scheduledFixtures = this.findUpcomingGames(fixturesArray)
    for (var fixture of scheduledFixtures) {
      var li = document.createElement('li')
      this.populateList(fixture, li)
      var button = this.createAddButton()
      li.appendChild(button)
      this.element.appendChild(li)
    }
  },

  createPtag: function(id, li, label, text) {
    var pTag = document.createElement('p')
    pTag.id = id
    pTag.innerText = label + text
    li.appendChild(pTag)
    return pTag
  },

  populateList: function(fixture, li) {
    var result = this.formatResult(fixture)
    this.createPtag('date', li, 'Date: ', fixture.date)
    this.createPtag('home-team', li, 'Home: ', fixture.homeTeamName)
    this.createPtag('away-team', li, 'Away: ', fixture.awayTeamName)
    this.createPtag('result', li, 'Result: ', result)
  },

  formatResult: function(fixture) {
    if (fixture.result.goalsHomeTeam === null) {
      return "Unplayed"
    }
    resultString = fixture.result.goalsHomeTeam + " - " + fixture.result.goalsAwayTeam
    return resultString
  },

  findUpcomingGames: function(allFixtures) {
    var dateToday = new Date()
    var nextWeek = new Date(dateToday.getTime() + 7 * 24 * 60 * 60 * 1000)
    return allFixtures.filter(function(fixture) {
      return (new Date(fixture.date) > dateToday) && (new Date(fixture.date) < nextWeek)
    })
  },

  createAddButton: function() {
    var button = document.createElement('button')
    button.innerText = 'Add to favourites'
    button.addEventListener('click', function(e) {
      console.log('clicky clicky')
    })
    return button
  }

}


module.exports = FixturesView