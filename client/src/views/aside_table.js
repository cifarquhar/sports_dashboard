var AsideTable = function() {
  this.asideElement = document.createElement('aside')
  this.asideElement.id = ('aside-table')
}

AsideTable.prototype = {

  render: function(league) {
    var table = document.createElement('table')
    var headerRow = document.createElement('tr')
    
    createHeader(headerRow, 'Position')
    createHeader(headerRow, 'Team')
    createHeader(headerRow, 'Points')
    table.appendChild(headerRow)

    for (var i = 0; i < 5; i++) {
      createEntryRow(league.standing[i], table)
    }
  },

  createHeader: function(row, label) {
    var header = document.createElement('th')
    header.innerText = label
    row.appendChild(header)
  },

  createEntryCell: function(data, row) {
    var cell = document.createElement('td')
    cell.innerText = data
    row.appendChild(cell)
  },

  createEntryRow: function(team, table) {
    var row = document.createElement('tr')
    createEntryCell(team.position, row)
    createEntryCell(team.teamName, row)
    createEntryCell(team.points, row)
    table.appendChild(row)
  },

  

}