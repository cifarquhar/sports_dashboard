var PlayerList = function(url){
  this.url = url
}

PlayerList.prototype = {
    getData: function(callback){
      var request = new XMLHttpRequest()
      request.open("GET",this.url)
      request.setRequestHeader('X-Auth-Token', '3fbc8336da93422fa82dc90ab1808606')
      request.onload = function(){
        if (request.status === 200){
          var jsonString = request.responseText
          this.squadList = JSON.parse(jsonString)
          callback(this.squadList)
        }
      }.bind(this)
      request.send()
    }
}


module.exports = PlayerList
