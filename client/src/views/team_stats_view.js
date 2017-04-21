var PlayerList = require("../models/player_list")
var PlayerListView = require("./player_list_view")
var FormList = require("../models/form_list")
var FormListView = require("./form_list_view")

var TeamStatsView = function(){
  this.playerElement = document.querySelector("#player-div")
  this.formElement = document.querySelector("#form-div")
  this.matchElement = document.querySelector("#match-div")
}

TeamStatsView.prototype = {

  render: function(league){

    this.teamSelector = document.querySelector("#team-selector")
    var playerElement = this.playerElement
    var formElement = this.formElement
    var matchElement = this.matchElement
    
    var teams = league.teams.sort()
    var teamName = teams[0].name

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
    })


    var teamFormURL = teams[0]._links.fixtures.href
    var teamForm = new FormList(teamFormURL)
    var teamFormView = new FormListView()
    teamForm.getData(function(fixtures){
      teamFormView.render(fixtures,formElement,teamName)
    })






   this.teamSelector.addEventListener("change",function(){
      var teamPlayerURL = teams[this.value]._links.players.href
      var teamPlayers = new PlayerList(teamPlayerURL)
      teamPlayers.getData(function(squadList){
        teamPlayerView.render(squadList,playerElement)
      }.bind(this))
      var newTeamName = teams[this.value].name
      var teamFormURL = teams[this.value]._links.fixtures.href
      var teamForm = new FormList(teamFormURL)
      teamForm.getData(function(fixtures){
        teamFormView.render(fixtures,formElement,newTeamName)
      })
    })



    
    
    // var matchP = document.createElement("p")

    // matchP.innerText = "Match stuff here"

    // matchElement.appendChild(matchP)
  }

}

module.exports = TeamStatsView