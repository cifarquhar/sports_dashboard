var FixturesView = function() {
  this.element = document.querySelector('#fixtures')
}

FixturesView.prototype = {

  render: function(fixtures) {
    console.log('favs: ', fixtures)
    var fixturesArray = fixtures.fixtures
    for (var fixture of fixturesArray) {
      var li = document.createElement('li')
      
      var pDate = this.createPtag('date')
      pDate.innerText = fixture.date

      var pHomeTeam = this.createPtag('home-team')
      pHomeTeam.innerText = fixture.homeTeamName

      var pAwayTeam = this.createPtag('away-team')
      pAwayTeam.innerText = fixture.awayTeamName

      var pResult = this.createPtag('result')
      pResult.innerText = this.formatResult(fixture)

      li.appendChild(pDate)
      li.appendChild(pHomeTeam)
      li.appendChild(pAwayTeam)
      li.appendChild(pResult)
      this.element.appendChild(li)
    }
  },

  createPtag: function(id) {
    var pTag = document.createElement('p')
    pTag.id = id
    return pTag
  },

  formatResult: function(fixture) {
    if (fixture.result.goalsHomeTeam === null) {
      return "Unplayed"
    }
    resultString = fixture.result.goalsHomeTeam + " - " + fixture.result.goalsAwayTeam
    return resultString
  }
}


module.exports = FixturesView