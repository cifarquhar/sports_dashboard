var MatchView = require("./match_view")
var path = require("path")

var FormListView = function(){

}

FormListView.prototype = {

  render: function(formList,element,teamName,formOption){
    
    var fixtures = formList.fixtures

    var matchElement = document.querySelector("#match-div")

    if (formOption == 1){

      while (matchElement.hasChildNodes()) {
        matchElement.removeChild(matchElement.lastChild);
      }

      var completedFixtures = fixtures.filter(function(fixture){
        if (fixture.status === "FINISHED") return fixture
      })
      var startPoint = completedFixtures.length - 10
      var fixtures = completedFixtures.slice(startPoint)
    }
    else if (formOption == 2){

      while (matchElement.hasChildNodes()) {
        matchElement.removeChild(matchElement.lastChild);
      }
      
      var competitionID = 426
      fixtures = fixtures.filter(function(fixture){
        var fixtureCompetitionURL = fixture._links.competition.href
        var fixtureCompetitionID = path.basename(fixtureCompetitionURL)
        if (fixtureCompetitionID == competitionID) return fixture
      })
    }



    while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
    }

    var matchElement = document.querySelector("#match-div")

    var resultWrapper = document.createElement('div')
    resultWrapper.id = 'result-box-wrapper'

    fixtures.forEach(function(fixture){
      var homeGoals = fixture.result.goalsHomeTeam
      var awayGoals = fixture.result.goalsAwayTeam
      var resultBox = document.createElement("div")
      resultBox.classList.add("box")
      if (homeGoals === null){
        resultBox.classList.add("unplayed")
      }
      else if (homeGoals === awayGoals){
        resultBox.classList.add("draw")
      }
      else if (((teamName === fixture.homeTeamName) && homeGoals > awayGoals) || ((teamName === fixture.awayTeamName) && homeGoals < awayGoals)){
        resultBox.classList.add("win")
      }
      else if (((teamName === fixture.homeTeamName) && homeGoals < awayGoals) || ((teamName === fixture.awayTeamName) && homeGoals > awayGoals)){
        resultBox.classList.add("loss")
      }


      resultBox.addEventListener("click",function(){
        var previousBox = document.querySelector(".selected")
        if (previousBox) previousBox.classList.remove("selected")
        var matchView = new MatchView(fixture,matchElement)
        resultBox.classList.add("selected")
        matchView.render()
      })
      
      resultWrapper.appendChild(resultBox)
    })

    element.appendChild(resultWrapper)

    var formSelector = document.querySelector("#form-selector")
    formSelector.addEventListener("change",function(){
      this.render(formList,element,teamName,formSelector.value)
    }.bind(this))

  }

}

module.exports = FormListView