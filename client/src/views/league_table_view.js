var LeagueTableView = function(){
  this.element = document.querySelector("#table-div")
  this.standings = []
}

LeagueTableView.prototype = {

  render: function(league){
    // Check we're in the function
    console.log(league)
    console.log("rendering league table")

    // Create table and headings
    var table = document.createElement("table")
    table.border = "1"
    var tableHeaders = document.createElement("tr")
    var positionHeader = document.createElement("th")
    positionHeader.innerText = "Position"
    var nameHeader = document.createElement("th")
    nameHeader.innerText = "Team"
    var playedHeader = document.createElement("th")
    playedHeader.innerText = "P"
    var winHeader = document.createElement("th")
    winHeader.innerText = "W"
    var drawHeader = document.createElement("th")
    drawHeader.innerText = "D"
    var lossHeader = document.createElement("th")
    lossHeader.innerText = "L"
    var forHeader = document.createElement("th")
    forHeader.innerText = "F"
    var againstHeader = document.createElement("th")
    againstHeader.innerText = "A"
    var differenceHeader = document.createElement("th")
    differenceHeader.innerText = "GD"
    var pointsHeader = document.createElement("th")
    pointsHeader.innerText = "Points"

    // Add headings to table
    tableHeaders.appendChild(positionHeader)
    tableHeaders.appendChild(nameHeader)
    tableHeaders.appendChild(playedHeader)
    tableHeaders.appendChild(winHeader)
    tableHeaders.appendChild(drawHeader)
    tableHeaders.appendChild(lossHeader)
    tableHeaders.appendChild(forHeader)
    tableHeaders.appendChild(againstHeader)
    tableHeaders.appendChild(differenceHeader)
    tableHeaders.appendChild(pointsHeader)

    table.appendChild(tableHeaders)




    var teams = league.standing
    console.log(teams)

    // Create row for each team
    teams.forEach(function(team){
      var teamEntry = document.createElement("tr")
      var positionEntry = document.createElement("td")
      positionEntry.innerText = team.position
      var nameEntry = document.createElement("td")
      nameEntry.innerText = team.teamName
      var playedEntry = document.createElement("td")
      playedEntry.innerText = team.playedGames
      var winEntry = document.createElement("td")
      winEntry.innerText = team.wins
      var drawEntry = document.createElement("td")
      drawEntry.innerText = team.draws
      var lossEntry = document.createElement("td")
      lossEntry.innerText = team.losses
      var forEntry = document.createElement("td")
      forEntry.innerText = team.goals
      var againstEntry = document.createElement("td")
      againstEntry.innerText = team.goalsAgainst
      var differenceEntry = document.createElement("td")
      differenceEntry.innerText = team.goalDifference
      var pointsEntry = document.createElement("td")
      pointsEntry.innerText = team.points


      teamEntry.appendChild(positionEntry)
      teamEntry.appendChild(nameEntry)
      teamEntry.appendChild(playedEntry)
      teamEntry.appendChild(winEntry)
      teamEntry.appendChild(drawEntry)
      teamEntry.appendChild(lossEntry)
      teamEntry.appendChild(forEntry)
      teamEntry.appendChild(againstEntry)
      teamEntry.appendChild(differenceEntry)
      teamEntry.appendChild(pointsEntry)
      table.appendChild(teamEntry)
    })


    // Add table to page
    this.element.appendChild(table)


  },
  getTeamInfo: function(league){
    this.standings = league.standing
  }

}




module.exports = LeagueTableView