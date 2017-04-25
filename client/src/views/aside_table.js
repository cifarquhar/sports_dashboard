var AsideTable = function() {
  this.asideElement = document.createElement('aside')
  this.asideElement.id = ('aside-table')
}

AsideTable.prototype = {

  render: function() {
    // Make table
    var table = document.createElement('table')
    // Make header row
    var headerRow = document.createElement('tr')
    // Make headers 
    // Append headers to row
    createHeader(headerRow, 'Position')
    createHeader(headerRow, 'Team')
    createHeader(headerRow, 'Points')
    // Append row to table
    table.appendChild(headerRow)
    // Make team entry row

    // Add position
    // Add team name add points
    // Append position name and points to row
    // Append row to table
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