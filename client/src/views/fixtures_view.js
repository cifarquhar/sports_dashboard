var FixturesView = function() {
  this.element = document.querySelector('#fixtures')
}

FixturesView.prototype = {

  render: function(fixtures) {
    console.log('favs: ', fixtures)
    var fixturesArray = fixtures.fixtures
    for (var fixture of fixturesArray) {
      var li = document.createElement('li')
      
      var pDate = this.createPtag('date', li)
      pDate.innerText = fixture.date

      var pHomeTeam = this.createPtag('home-team', li)
      pHomeTeam.innerText = fixture.homeTeamName

      var pAwayTeam = this.createPtag('away-team', li)
      pAwayTeam.innerText = fixture.awayTeamName

      var pResult = this.createPtag('result', li)
      pResult.innerText = this.formatResult(fixture)

      this.element.appendChild(li)
    }
  },

  createPtag: function(id, li) {
    var pTag = document.createElement('p')
    pTag.id = id
    li.appendChild(pTag)
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