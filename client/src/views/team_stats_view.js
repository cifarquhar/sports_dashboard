// Requirements
var PlayerList = require("../models/player_list")
var PlayerListView = require("./player_list_view")
var FormList = require("../models/form_list")
var FormListView = require("./form_list_view")


// Constructor
var TeamStatsView = function(){
  this.playerElement = document.querySelector("#player-div")
  this.formElement = document.querySelector("#form-div")
  this.matchElement = document.querySelector("#match-div")
  this.formOption = document.querySelector("#form-selector").value
}

TeamStatsView.prototype = {

  render: function(league){

    // Matches elements to variables
    this.teamSelector = document.querySelector("#team-selector")
    var playerElement = this.playerElement
    var formElement = this.formElement
    var matchElement = this.matchElement
    var formOption = this.formOption
    
    
    // Gets name of team clicked on league table view
    var teamNameLinkedFrom = window.name
    console.log(teamNameLinkedFrom)

    var teams = league.teams.sort()

    console.log(teams)

    var teamIndexLinkedTo = teams.findIndex(function(team){
      return team.name === teamNameLinkedFrom
    })

    console.log(teamIndexLinkedTo)


    var teamName = teams[teamIndexLinkedTo].name

    // Populate selector
    teams.forEach(function(team,index){
      var teamOption = document.createElement("option")
      teamOption.innerText = team.name
      teamOption.value = index
      if (team.name === teamName) teamOption.selected = "selected"
      this.teamSelector.appendChild(teamOption)
    }.bind(this))

    // Build player list
    var teamPlayerURL = teams[teamIndexLinkedTo]._links.players.href
    var teamPlayers = new PlayerList(teamPlayerURL)
    var teamPlayerView = new PlayerListView()
    teamPlayers.getData(function(squadList){
      teamPlayerView.render(squadList,playerElement)
    })

    // Buld form guide
    var teamFormURL = teams[teamIndexLinkedTo]._links.fixtures.href
    var teamForm = new FormList(teamFormURL)
    console.log(teamForm)
    var teamFormView = new FormListView()
    teamForm.getData(function(fixtures){
      teamFormView.render(fixtures,formElement,teamName,formOption)
    })


    // Team selector event listener
   this.teamSelector.addEventListener("change",function(){
    window.name = teams[this.value].name
      var teamPlayerURL = teams[this.value]._links.players.href
      var teamPlayers = new PlayerList(teamPlayerURL)
      teamPlayers.getData(function(squadList){
        teamPlayerView.render(squadList,playerElement)
      }.bind(this))
      var newTeamName = teams[this.value].name
      var teamFormURL = teams[this.value]._links.fixtures.href
      var teamForm = new FormList(teamFormURL)
      teamForm.getData(function(fixtures){
        teamFormView.render(fixtures,formElement,newTeamName,formOption)
      })
      while (matchElement.hasChildNodes()) {
        matchElement.removeChild(matchElement.lastChild);
      }
    })

  }

}

module.exports = TeamStatsView