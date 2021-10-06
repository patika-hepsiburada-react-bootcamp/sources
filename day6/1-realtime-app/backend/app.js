const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.end('realtime colors app');
});

let activeColor = '#FFFFFF';

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('new-color', activeColor);

  socket.on('new-color', (color) => {
    console.log('New Color:', color);

    io.emit('new-color', color);
    activeColor = color;
  });

  socket.on('disconnect', () => console.log('a user disconnected'));
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});
