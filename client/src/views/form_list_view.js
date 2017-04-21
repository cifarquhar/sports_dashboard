var FormListView = function(){

}

FormListView.prototype = {

  render: function(formList,element){
    console.log("stuff happening in the form view")

    var fixtures = formList.fixtures
    console.log(fixtures)

    while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
    }

    fixtures.forEach(function(fixture){
      var resultBox = document.createElement("div")
      resultBox.style = "width:10px;height:10px;border:1px solid #000;"
      element.appendChild(resultBox)
    })
  }

}

module.exports = FormListView