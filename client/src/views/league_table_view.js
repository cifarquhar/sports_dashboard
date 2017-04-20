var LeagueTableView = function(){
  this.element = document.querySelector("#table-div")
}

LeagueTableView.prototype = {

  render: function(table){
    console.log("rendering")
    var dummyP = document.createElement("p")
    dummyP.innerText = "Table will go in here"
    this.element.appendChild(dummyP)
  }

}




module.exports = LeagueTableView