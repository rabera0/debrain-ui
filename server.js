const WebSocket = require('ws');

// Create WebSocket server on port 1000
const wss = new WebSocket.Server({ port: 1000 });

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

console.log('WebSocket server is running on ws://localhost:1000');
