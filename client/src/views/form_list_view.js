var MatchView = require("./match_view")

var FormListView = function(){

}

FormListView.prototype = {

  render: function(formList,element,teamName){
    
    var fixtures = formList.fixtures

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
  }

}

module.exports = FormListView