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

    var wins = team.wins
    var draws = team.draws
    var losses = team.losses
    var graphTitle = "Results for " + team.teamName
    
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

    var goalsFor = team.goals
    var goalsAgainst = team.goalsAgainst
    var goalDifference = team.goalDifference

    var graphTitle = "Goals For/Against " + team.teamName
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