var AsideTable = function() {
  this.body = document.querySelector('body')
  this.asideElement = document.createElement('aside')
  this.asideElement.id = ('aside-table')
  this.body.appendChild(this.asideElement)
}

AsideTable.prototype = {

  render: function(league) {
    var table = document.createElement('table')
    var headerRow = document.createElement('tr')
    
    this.createHeader(headerRow, 'Position')
    this.createHeader(headerRow, 'Team')
    this.createHeader(headerRow, 'Points')
    table.appendChild(headerRow)

    for (var i = 0; i < 5; i++) {
      this.createEntryRow(league.standing[i], table)
    }
    this.asideElement.appendChild(table)
  },

  createHeader: function(row, label) {
    var header = document.createElement('th')
    header.innerText = label
    header.className = 'aside-th'
    row.appendChild(header)
  },

  createEntryCell: function(data, row) {
    var cell = document.createElement('td')
    cell.innerText = data
    cell.className = 'aside-td'
    row.appendChild(cell)
  },

  createEntryRow: function(team, table) {
    var row = document.createElement('tr')
    this.createEntryCell(team.position, row)
    this.createEntryCell(team.teamName, row)
    this.createEntryCell(team.points, row)
    table.appendChild(row)
  },

}

module.exports = AsideTable