var PlayerList = require("../models/player_list")
var PlayerListView = require("./player_list_view")

var TeamStatsView = function(){
  this.playerElement = document.querySelector("#player-div")
  this.formElement = document.querySelector("#form-div")
  this.matchElement = document.querySelector("#match-div")
}

TeamStatsView.prototype = {

  render: function(league){

    this.teamSelector = document.querySelector("#team-selector")
    var playerElement = this.playerElement
    
    var teams = league.teams.sort()

    teams.forEach(function(team,index){
      var teamOption = document.createElement("option")
      teamOption.innerText = team.name
      teamOption.value = index
      this.teamSelector.appendChild(teamOption)
    }.bind(this))

    var teamPlayerURL = teams[0]._links.players.href

    var teamPlayers = new PlayerList(teamPlayerURL)
    var teamPlayerView = new PlayerListView()

    teamPlayers.getData(function(squadList){
      teamPlayerView.render(squadList,playerElement)
    }.bind(this))




    this.teamSelector.addEventListener("change",function(){
      console.log("changed")
      var teamPlayerURL = teams[this.value]._links.players.href
      var teamPlayers = new PlayerList(teamPlayerURL)
      teamPlayers.getData(function(squadList){
        teamPlayerView.render(squadList,playerElement)
      }.bind(this))
    })



    
    var formP = document.createElement("p")
    var matchP = document.createElement("p")

    formP.innerText = "Form stuff here"
    matchP.innerText = "Match stuff here"

    this.formElement.appendChild(formP)
    this.matchElement.appendChild(matchP)
  }

}

module.exports = TeamStatsView