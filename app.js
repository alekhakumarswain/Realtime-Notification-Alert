const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public')); // Serve the frontend from the 'public' directory

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('sendNotification', (message) => {
        console.log(`Notification sent: ${message}`);
        // Broadcast notification to all connected clients
        socket.broadcast.emit('receiveNotification', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
