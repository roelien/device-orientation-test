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


var ballArr=[
    {
    x:100,
    y:100,
    r: 10,
    stepX:5,
    stepY:5,  
    },
];


var platformArr=[
    {
        platformX:50,
        platformY:50,
        width: 20,
        height: 100,    
    },
    {
        platformX: 250,
        platformY: 50,
        width: 20,
        height: 100,
    }

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
io.sockets.on("connection", function(socket){
    socket.on('orientation', function(data){
        console.log('orientation changed', data);
        //paddle bewegen op de goede 
    });
});

setInterval( function() {
    
    for(var i=0;i<platformArr.length; i++) {
        var thisPlatform=platformArr[i];

//        moveBall(thisBall);
    }
    
    io.sockets.emit('canvas', platformArr);
    console.log (thisPlatform);
    
    
}, 1000);