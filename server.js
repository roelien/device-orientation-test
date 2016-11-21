var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 8080
var io = require("socket.io").listen(app.listen(port));


app.get('/', function(req, res){

  //send the index.html file for all requests
  res.sendFile(__dirname + '/index.html');

});

console.log('listening on *:'+ port);

var platformArr=[
    {
        platformX:50,
        platformY:50,
        width: 20,
        height: 100,    
    },

];


//function moveBall(ball){
//    ball.x += ball.stepX;
//    ball.y += ball.stepY;
//  
//    if(ball.x == 470 || ball.x == 30){
//       ball.stepX = -ball.stepX;
//    }
//    if (ball.y == 30 || ball.y == 270){
//       ball.stepY = -ball.stepY;
//    }    
//    return ball;
//}

setInterval( function() {
    
    for(var i=0;i<platformArr.length; i++) {
        var thisBall=platformArr[i];
//        moveBall(thisBall);
    }
    
    io.sockets.emit('canvas', platformArr);
    console.log (platformArr);
}, 1000);