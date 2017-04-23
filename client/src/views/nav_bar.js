var NavBar = function() {
  this.div = document.querySelector('#nav-bar')
}

NavBar.prototype = {

  createNavBar: function() {

  },

  createLi: function(label, link) {
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.href = link
    a.innerText = label
    li.appendChild(a)
    return li
  },

}

module.exports = NavBar