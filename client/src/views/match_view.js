var MatchView = function(fixture,element){
  this.fixture = fixture
  this.element = element
}

MatchView.prototype = {

  render: function(){

    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.lastChild);
    }

    var teamsP = document.createElement("p")
    teamsP.innerText = this.fixture.homeTeamName + " vs " + this.fixture.awayTeamName
    this.element.appendChild(teamsP)

    var scoreP = document.createElement("p")
    scoreP.innerText = this.fixture.result.goalsHomeTeam.toString() + " - " + this.fixture.result.goalsAwayTeam.toString()
    this.element.appendChild(scoreP)

    var dateP = document.createElement("p")
    dateP.innerText = this.fixture.date
    this.element.appendChild(dateP)

  }

}

module.exports = MatchView