var LeagueTableView = function(){
  this.element = document.querySelector("#table-div")
}

LeagueTableView.prototype = {

  render: function(table){
    // Check we're in the function
    console.log(table)
    console.log("rendering league table")

    // Create table and headings
    var table = document.createElement("table")
    table.border = "1"
    var tableHeaders = document.createElement("tr")
    var positionHeader = document.createElement("th")
    positionHeader.innerText = "Position"
    var teamHeader = document.createElement("th")
    teamHeader.innerText = "Team"
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
    tableHeaders.appendChild(teamHeader)
    tableHeaders.appendChild(playedHeader)
    tableHeaders.appendChild(winHeader)
    tableHeaders.appendChild(drawHeader)
    tableHeaders.appendChild(lossHeader)
    tableHeaders.appendChild(forHeader)
    tableHeaders.appendChild(againstHeader)
    tableHeaders.appendChild(differenceHeader)
    tableHeaders.appendChild(pointsHeader)

    table.appendChild(tableHeaders)




    var teams = table.standings
    console.log(teams)

    teams.forEach(function(team){
      var teamEntry = document.createElement("tr")
      var positionEntry = document.createElement("td")
      positionEntry.innerText = team.position
      teamEntry.appendChild(positionEntry)
      table.appendChild(teamEntry)
    })


    // Add table to page
    this.element.appendChild(table)


  }

}




module.exports = LeagueTableView