const express = require('express');
const socketio = require('socket.io');

//  App
const app = express();

//  Middleware for Public directory
app.use( express.static('public'));


const httpServer = app.listen(3000, () => {
    console.log('Server started at port 3000');
})


//  Socket.io 
const io = socketio(httpServer);

io.on('connection', socket => {

    socket.on('newMessage', dataFromClient => {

        console.log( 'A new message from client: ' + dataFromClient)

        
    })

    setTimeout( ()=>{
        io.emit('messageFromServer', 'Hi from Server');
    }, 3000 )

})