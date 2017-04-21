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

    this.teamSelector = document.querySelector("#team-selector")
    
    var teams = league.teams.sort()
    console.log(teams)

    teams.forEach(function(team,index){
      var teamOption = document.createElement("option")
      teamOption.innerText = team.name
      teamOption.value = index
      this.teamSelector.appendChild(teamOption)
    }.bind(this))

    teamPlayerURL = teams[0]._links.players.href
    console.log(teamPlayerURL)

    teamPlayers = new PlayerList(teamPlayerURL)
    console.log(teamPlayers)
    teamPlayerView = new PlayerListView()

    teamPlayers.getData(function(squadList){
      teamPlayerView.render(squadList,this.playerElement)
    }.bind(this))




    this.teamSelector.addEventListener("change",function(){
      console.log("changed")
    })



    // var playerP = document.createElement("p")
    var formP = document.createElement("p")
    var matchP = document.createElement("p")

    // playerP.innerText = "Player stuff here"
    formP.innerText = "Form stuff here"
    matchP.innerText = "Match stuff here"

    // this.playerElement.appendChild(playerP)
    this.formElement.appendChild(formP)
    this.matchElement.appendChild(matchP)
  }

}

module.exports = TeamStatsView