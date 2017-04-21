var FixturesView = function() {
  this.element = document.querySelector('#fixtures')
}

FixturesView.prototype = {

  render: function(fixtures) {
    console.log('favs: ', fixtures)
    var fixturesArray = fixtures.fixtures
    for (var fixture of fixturesArray) {
      var li = document.createElement('li')
      var pDate = this.createPtag('date')
      pDate.innerText = 'hi Brogrammers, this is a fixture'
      li.appendChild(pDate)
      this.element.appendChild(li)
    }
  },

  createPtag: function(id) {
    var pTag = document.createElement('p')
    pTag.id = id
    return pTag
  }
}


module.exports = FixturesView