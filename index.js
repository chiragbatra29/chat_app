var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res){
  res.sendFile('/home/user/Desktop/chat_app' + '/index.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// In order to send an event to everyone, Socket.IO gives us the io.emit:
//
// io.emit('some event', { for: 'everyone' });

// If you want to send a message to everyone except for a certain socket, we have the broadcast flag:
//
//
// io.on('connection', function(socket){
//   socket.broadcast.emit('hi');
// });


http.listen(3000, function(){
  console.log('listening on *:3000');
});


// **Tasks---------->
// Broadcast a message to connected users when someone connects or disconnects
// Add support for nicknames
// Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
// Add “{user} is typing” functionality
// Show who’s online
// Add private messaging
// Share your improvements!
