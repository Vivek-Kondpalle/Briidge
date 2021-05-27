const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// Static files
app.use(express.static('public'));

// Socket Setup
io.on('connection', (socket) => {
  console.log('connection established');

  socket.on('chat', (data) => {
    io.emit('chat', data);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  // console.log(io.engine.clientsCount);
});

server.listen(3000, () => {
  console.log('Server is connected');
});
