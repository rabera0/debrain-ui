const WebSocket = require('ws');

// Use the port from the environment variable (Heroku sets this), or default to 1000 for local use
const port = process.env.PORT || 1000;
const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    // Handle incoming messages from clients
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        
        // Broadcast the received message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

console.log(`WebSocket server is running on ws://localhost:${port}`);
