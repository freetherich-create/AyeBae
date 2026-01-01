const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 3003;

// Room management
const rooms = new Map();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'room' });
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('create-room', ({ roomId, userId }) => {
    socket.join(roomId);
    if (!rooms.has(roomId)) {
      rooms.set(roomId, new Set());
    }
    rooms.get(roomId).add(userId);
    socket.emit('room-created', { roomId, participants: Array.from(rooms.get(roomId)) });
  });

  socket.on('join-room', ({ roomId, userId }) => {
    socket.join(roomId);
    if (!rooms.has(roomId)) {
      rooms.set(roomId, new Set());
    }
    rooms.get(roomId).add(userId);
    socket.to(roomId).emit('user-joined', { userId });
    socket.emit('room-joined', { roomId, participants: Array.from(rooms.get(roomId)) });
  });

  socket.on('leave-room', ({ roomId, userId }) => {
    socket.leave(roomId);
    if (rooms.has(roomId)) {
      rooms.get(roomId).delete(userId);
      socket.to(roomId).emit('user-left', { userId });
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Room service listening on ${PORT}`);
});
