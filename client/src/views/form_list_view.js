var FormListView = function(){

}

FormListView.prototype = {

  render: function(formList,element){
    console.log("stuff happening in the form view")

    while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
    }
  }

}

module.exports = FormListView