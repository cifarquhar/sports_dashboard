// var express = require("express")
var path = require("path")
var UI = require("./views/ui")


var app = function(){
  var target = window.location.href
  var base = path.basename(target)
  new UI(base)
}

window.onload = app