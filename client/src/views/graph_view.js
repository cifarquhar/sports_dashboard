var PieChart = require("../models/pieChart")
var ColumnChart = require("../models/column_chart")

var GraphView = function(typeOption,filterOption){
  this.typeOption = typeOption
  this.filterOption = filterOption
}

GraphView.prototype = {

  render: function(team){
    var graphElement = document.querySelector("#graph-div")

    if (this.typeOption == 0){

    if (this.filterOption == 0) {
      var wins = team.wins
      var draws = team.draws
      var losses = team.losses
      var graphTitle = "All results for " + team.teamName
    }
    else if (this.filterOption == 1) {
      var wins = team.home.wins
      var draws = team.home.draws
      var losses = team.home.losses
      var graphTitle = "Home results for " + team.teamName
    }
    else if (this.filterOption == 2) {
      var wins = team.away.wins
      var draws = team.away.draws
      var losses = team.away.losses
      var graphTitle = "Away results for " + team.teamName
    }
    
    var data = [{
      name: "Results",

      data: [
        {
          name: "Won",
          y: wins,
          color: "#46c645"
        },
        {
          name: "Drawn",
          y: draws,
          color: "#Fede3b"
        },
        {
          name: "Lost",
          y: losses,
          color: "#e34a49"
        }
      ]

    }]

    new PieChart(graphElement, graphTitle, data)
  }

  else if (this.typeOption == 1){

    if (this.filterOption == 0) {
      var goalsFor = team.goals
      var goalsAgainst = team.goalsAgainst
      var goalDifference = team.goalDifference
      var graphTitle = "Goals For/Against " + team.teamName
    }
    else if (this.filterOption == 1) {
      var goalsFor = team.home.goals
      var goalsAgainst = team.home.goalsAgainst
      var goalDifference = team.home.goals - team.home.goalsAgainst
      var graphTitle = "Home goals for/against " + team.teamName
    }
    else if (this.filterOption == 2) {
      var goalsFor = team.away.goals
      var goalsAgainst = team.away.goalsAgainst
      var goalDifference = team.away.goals - team.away.goalsAgainst
      var graphTitle = "Away goals for/against " + team.teamName
    }

    var colSeries = [{
      name: "Goals",
      data: [goalsFor,goalsAgainst,goalDifference]
    }]
    var colCategories = ["For","Against","Difference"]

    new ColumnChart(graphElement,graphTitle,colSeries,colCategories)

  }
}
}


module.exports = GraphView