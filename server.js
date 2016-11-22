var express = require('express');
var app = express();
app.use('/', express.static(__dirname + './index'));
var http = require('http').Server(app);
var port = process.env.PORT || 8080
var io = require("socket.io").listen(app.listen(port));



app.get('/', function(req, res){

  //send the index.html file for all requests
  res.sendFile(__dirname + '/index.html');

});

console.log('listening on *:'+ port);


io.sockets.on('connection', function(socket){
        
    socket.on('orientation', function(data){
        console.log('orientation changed', data);
        socket.broadcast.emit('orientation', data);       
        //paddle bewegen op de goede 
    });
        
});

//
//
//setInterval( function() {
//    
//    for(var i=0;i<platformArr.length; i++) {
//        var thisPlatform=platformArr[i];
//
////        moveBall(thisBall);
//    }
//    
//    io.sockets.emit('canvas', platformArr);
//    console.log (thisPlatform);    
//    
//
//}, 1000);