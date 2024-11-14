const http = require('http');
const WebSocket = require('ws');

const port = process.env.PORT || 1000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>WebSocket server is running</h1>');
    } else {
        res.writeHead(404);
        res.end();
    }
});

// Attach WebSocket server to the HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
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

server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
