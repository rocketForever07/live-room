var express = require("express");

var app = express();
app.use('/images', express.static(__dirname + '/images'))
app.use('/styles',  express.static(__dirname + '/styles'))
app.use('/js',  express.static(__dirname + '/js'))
app.use('/Starter Template',  express.static(__dirname + '/Starter Template'))
app.use('/styles',  express.static(__dirname + '/styles'))


app.get("/lobby", function(req, res){
    res.sendFile(__dirname+"/lobby.html");
})

app.get("/room", function(req, res){
    console.log(__dirname+"/Starter Template/room.html");
    res.sendFile(__dirname+"/room.html");
})


app.listen(8999);
console.log("Server live-room has stated on port 8999");