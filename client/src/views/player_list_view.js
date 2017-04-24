var PlayerListView = function(){
  
}

PlayerListView.prototype = {

  render: function(squadList,element){
    var players = squadList.players
    var titleTag = this.createTitle('Squad')
    
    while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
    }

    var table = document.createElement("table")
    table.border = "1"
    var tableHeaders = document.createElement("tr")
    var nameHeader = document.createElement("th")
    nameHeader.innerText = "Name"
    var positionHeader = document.createElement("th")
    positionHeader.innerText = "Position"
    var numberHeader = document.createElement("th")
    numberHeader.innerText = "Squad Number"

    tableHeaders.appendChild(nameHeader)
    tableHeaders.appendChild(positionHeader)
    tableHeaders.appendChild(numberHeader)

    table.appendChild(tableHeaders)


    players.forEach(function(player){
      var playerEntry = document.createElement("tr")
      var nameEntry = document.createElement("td")
      nameEntry.innerText = player.name
      var positionEntry = document.createElement("td")
      positionEntry.innerText = player.position
      var numberEntry = document.createElement("td")
      numberEntry.innerText = player.jerseyNumber
      playerEntry.appendChild(nameEntry)
      playerEntry.appendChild(positionEntry)
      playerEntry.appendChild(numberEntry)
      table.appendChild(playerEntry)
    })

    element.appendChild(titleTag)
    element.appendChild(table)

  },

  createTitle: function(titleText) {
    var title = document.createElement('h2')
    title.innerText = titleText
    title.id = 'player-view-title'
    return title
  }

}

module.exports = PlayerListView