

var express = require("express");
var app     = express();
var path    = require("path");
var fs = require("fs")


//Store all JS and CSS in Scripts folder.

app.listen(3000);

app.get('/',function(req,res){
  res.sendFile(__dirname + "/public/index.html");
  //__dirname : It will resolve to your project folder.
});
app.use(express.static(path.join(__dirname, '/public')));


console.log("Running at Port 3000");

module.exports = app;