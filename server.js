

var express = require("express");
var app     = express();
var path    = require("path");
var fs = require("fs")


//Store all JS and CSS in Scripts folder.
app.listen(process.env.port)



app.get('/',function(req,res){
  res.sendFile(__dirname + "/public/index.html");
  //__dirname : It will resolve to your project folder.
});

app.get('/messages', function (req, res) {
   fs.readFile( __dirname + "/" + "public/message.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

app.use(express.static(path.join(__dirname, '/public')));


console.log("Running at Port 3000");

module.exports = app;