var NavBar = function() {
  this.div = document.querySelector('#nav-bar')

  this.createNavBar()
}

NavBar.prototype = {

  createNavBar: function() {
    var nav = document.createElement('nav')
    var homeDiv = this.createNavLink('Home', 'http://localhost:3000')
    var fixturesDiv = this.createNavLink('Fixtures', 'http://localhost:3000/map')
    var favouritesDiv = this.createNavLink('WatchList', 'http://localhost:3000/favourites')
    var tableDiv = this.createNavLink('Table', 'http://localhost:3000/table')
    var teamDiv = this.createNavLink('Team', 'http://localhost:3000/team')
    nav.appendChild(homeDiv)
    nav.appendChild(fixturesDiv)
    nav.appendChild(favouritesDiv)  
    nav.appendChild(teamDiv)  
    nav.appendChild(tableDiv)  
    this.div.appendChild(nav)
  },

  createNavLink: function(label, link) {
    var div = document.createElement('div')
    div.className = 'nav-item'
    var a = document.createElement('a')
    a.href = link
    a.innerText = label
    div.appendChild(a)
    return div
  },

}

module.exports = NavBar