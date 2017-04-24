var MatchView = require("./match_view")
var path = require("path")

var FormListView = function(){

}

FormListView.prototype = {

  render: function(formList,element,teamName,formOption){
    
    var fixtures = formList.fixtures

    console.log(fixtures)


    console.log(formOption)

    if (formOption == 1){
      console.log("in if loop")
      var completedFixtures = fixtures.filter(function(fixture){
        console.log(fixture.status)
        // console.log(fixture)
        if (fixture.status === "FINISHED") return fixture
      })
      console.log(completedFixtures)
      var startPoint = completedFixtures.length - 10
      console.log(startPoint)
      var fixtures = completedFixtures.slice(startPoint, 10)
      console.log(fixtures)
    }
    else if (formOption == 2){
      console.log("in if loop")
      var competitionID = 426
      fixtures = fixtures.map(function(fixture){
        var fixtureCompetitionURL = fixture._links.competition.href
        var fixtureCompetitionID = path.basename(fixtureCompetitionURL)
        if (fixtureCompetitionID === competitionID) return fixture
      })
      console.log(fixtures)
    }

    console.log("after if loop")


    while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
    }

    var matchElement = document.querySelector("#match-div")


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
        var matchView = new MatchView(fixture,matchElement)
        matchView.render()
        // console.log(fixture)
      })
      
      element.appendChild(resultBox)
    })


    var formSelector = document.querySelector("#form-selector")
    formSelector.addEventListener("change",function(){
      this.render(formList,element,teamName,formSelector.value)
    }.bind(this))

  }

}

module.exports = FormListView