var NavBar = function() {
  this.div = document.querySelector('#nav-bar')

  this.createNavBar()
}

NavBar.prototype = {

  createNavBar: function() {
    var nav = document.createElement('nav')
    var ol = document.createElement('ol')
    ol.id = 'nav-list'
    var homeLi = this.createLi('Home', 'http://localhost:3000')
    var fixturesLi = this.createLi('Fixtures', 'http://localhost:3000/map')
    var favouritesLi = this.createLi('Favourites', 'http://localhost:3000/favourites')
    ol.appendChild(homeLi)
    ol.appendChild(fixturesLi)
    ol.appendChild(favouritesLi)
    nav.appendChild(ol)
    this.div.appendChild(nav)
  },

  createLi: function(label, link) {
    var li = document.createElement('li')
    li.className = 'nav-item'
    var a = document.createElement('a')
    a.href = link
    a.innerText = label
    li.appendChild(a)
    return li
  },

}

module.exports = NavBar