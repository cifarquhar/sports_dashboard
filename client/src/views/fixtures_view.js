var FixturesView = function() {
  this.element = document.querySelector('#fixtures')
}

FixturesView.prototype = {

  render: function(fixtures) {
    // console.log('fixtures: ', fixtures)
    var fixturesArray = fixtures.fixtures
    this.findUpcomingGames()
    var scheduledFixtures = fixturesArray.filter(function(fixture) {
      return (fixture.status === 'SCHEDULED')
    })
    console.log('fixtures: ', scheduledFixtures)
    for (var fixture of scheduledFixtures) {
      var li = document.createElement('li')
      this.populateList(fixture, li)
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
    console.log(dateToday)
  }
}


module.exports = FixturesView