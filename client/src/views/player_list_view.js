var PlayerListView = function(){
  
}

PlayerListView.prototype = {

  render: function(squadList,element){
    console.log("Stuff happening in the player view")

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


    element.appendChild(table)

  }

}

module.exports = PlayerListView