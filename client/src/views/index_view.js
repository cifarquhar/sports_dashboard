var IndexView = function() {
  this.render()
}

IndexView.prototype = {

  render: function() {
    var body = document.querySelector('#content-div')
    var h2 = document.createElement('h2')
    var pTag1 = document.createElement('p')
    var pTag2 = document.createElement('p')

    h2.innerText = 'Welcome to the Sports Dashboard!'
    pTag1.innerText = 'Click the links above to see upcoming fixtures, team details and add fixtures to your watchlist.'
    pTag2.innerText = 'It\'s just football for now, but we\'ll have more sports info coming at you very soon.'
    body.appendChild(h2)
    body.appendChild(pTag1)
    body.appendChild(pTag2)
  }

}

module.exports = IndexView