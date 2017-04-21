var PlayerList = require("../models/player_list")
var PlayerListView = require("./player_list_view")

var TeamStatsView = function(){
  this.playerElement = document.querySelector("#player-div")
  this.formElement = document.querySelector("#form-div")
  this.matchElement = document.querySelector("#match-div")
}

TeamStatsView.prototype = {

  render: function(league){
    console.log(league)
    
    var teams = league.teams
    console.log(teams)



    var playerP = document.createElement("p")
    var formP = document.createElement("p")
    var matchP = document.createElement("p")

    playerP.innerText = "Player stuff here"
    formP.innerText = "Form stuff here"
    matchP.innerText = "Match stuff here"

    this.playerElement.appendChild(playerP)
    this.formElement.appendChild(formP)
    this.matchElement.appendChild(matchP)
  }

}

module.exports = TeamStatsView