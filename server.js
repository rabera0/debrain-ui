const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(express.json());  // Middleware to parse JSON bodies

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const dataFilePath = path.join(__dirname, 'flows.json');
let flows = [];

// Load flows from JSON at server startup
try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    flows = JSON.parse(fileData);
    console.log("using real")
} catch (err) {
    console.error('Error reading flows.json:', err);
    flows = [
        { from: 0, to: 0, quantity: 0 },
        { from: 0, to: 1, quantity: 0 },
        { from: 0, to: 2, quantity: 0 },
        { from: 0, to: 3, quantity: 0 },
        { from: 0, to: 4, quantity: 0 },
        { from: 0, to: 5, quantity: 0 },
        { from: 0, to: 6, quantity: 0 },
        { from: 0, to: 7, quantity: 1 },
        { from: 0, to: 8, quantity: 1 },
        { from: 0, to: 9, quantity: 1 },
        { from: 0, to: 10, quantity: 1 },
        { from: 0, to: 11, quantity: 1 },
        { from: 1, to: 0, quantity: 0 },
        { from: 1, to: 1, quantity: 0 },
        { from: 1, to: 2, quantity: 0 },
        { from: 1, to: 3, quantity: 0 },
        { from: 1, to: 4, quantity: 0 },
        { from: 1, to: 5, quantity: 0 },
        { from: 1, to: 6, quantity: 1 },
        { from: 1, to: 7, quantity: 1 },
        { from: 1, to: 8, quantity: 1 },
        { from: 1, to: 9, quantity: 1 },
        { from: 1, to: 10, quantity: 1 },
        { from: 1, to: 11, quantity: 1 },
        { from: 2, to: 0, quantity: 0 },
        { from: 2, to: 1, quantity: 0 },
        { from: 2, to: 2, quantity: 0 },
        { from: 2, to: 3, quantity: 0 },
        { from: 2, to: 4, quantity: 0 },
        { from: 2, to: 5, quantity: 0 },
        { from: 2, to: 6, quantity: 1 },
        { from: 2, to: 7, quantity: 1 },
        { from: 2, to: 8, quantity: 1 },
        { from: 2, to: 9, quantity: 1 },
        { from: 2, to: 10, quantity: 1 },
        { from: 2, to: 11, quantity: 1 },
        { from: 3, to: 0, quantity: 1 },
        { from: 3, to: 1, quantity: 0 },
        { from: 3, to: 2, quantity: 0 },
        { from: 3, to: 3, quantity: 0 },
        { from: 3, to: 4, quantity: 0 },
        { from: 3, to: 5, quantity: 0 },
        { from: 3, to: 6, quantity: 1 },
        { from: 3, to: 7, quantity: 1 },
        { from: 3, to: 8, quantity: 1 },
        { from: 3, to: 9, quantity: 1 },
        { from: 3, to: 10, quantity: 1 },
        { from: 3, to: 11, quantity: 1 },
        { from: 4, to: 0, quantity: 1 },
        { from: 4, to: 1, quantity: 0 },
        { from: 4, to: 2, quantity: 0 },
        { from: 4, to: 3, quantity: 0 },
        { from: 4, to: 4, quantity: 0 },
        { from: 4, to: 5, quantity: 0 },
        { from: 4, to: 6, quantity: 1 },
        { from: 4, to: 7, quantity: 1 },
        { from: 4, to: 8, quantity: 1 },
        { from: 4, to: 9, quantity: 1 },
        { from: 4, to: 10, quantity: 1 },
        { from: 4, to: 11, quantity: 1 },
        { from: 5, to: 0, quantity: 0 },
        { from: 5, to: 1, quantity: 0 },
        { from: 5, to: 2, quantity: 0 },
        { from: 5, to: 3, quantity: 0 },
        { from: 5, to: 4, quantity: 0 },
        { from: 5, to: 5, quantity: 0 },
        { from: 5, to: 6, quantity: 1 },
        { from: 5, to: 7, quantity: 1 },
        { from: 5, to: 8, quantity: 1 },
        { from: 5, to: 9, quantity: 1 },
        { from: 5, to: 10, quantity: 1 },
        { from: 5, to: 11, quantity: 0 },
        { from: 6, to: 0, quantity: 1 },
        { from: 6, to: 1, quantity: 1 },
        { from: 6, to: 2, quantity: 1 },
        { from: 6, to: 3, quantity: 0 },
        { from: 6, to: 4, quantity: 1 },
        { from: 6, to: 5, quantity: 1 },
        { from: 6, to: 6, quantity: 0 },
        { from: 6, to: 7, quantity: 0 },
        { from: 6, to: 8, quantity: 0 },
        { from: 6, to: 9, quantity: 0 },
        { from: 6, to: 10, quantity: 0 },
        { from: 6, to: 11, quantity: 0 },
        { from: 7, to: 0, quantity: 1 },
        { from: 7, to: 1, quantity: 1 },
        { from: 7, to: 2, quantity: 1 },
        { from: 7, to: 3, quantity: 1 },
        { from: 7, to: 4, quantity: 1 },
        { from: 7, to: 5, quantity: 1 },
        { from: 7, to: 6, quantity: 0 },
        { from: 7, to: 7, quantity: 0 },
        { from: 7, to: 8, quantity: 0 },
        { from: 7, to: 9, quantity: 0},
        { from: 7, to: 10, quantity: 0 },
        { from: 7, to: 11, quantity: 0 },
        { from: 8, to: 0, quantity: 1 },
        { from: 8, to: 1, quantity: 1 },
        { from: 8, to: 2, quantity: 1 },
        { from: 8, to: 3, quantity: 1 },
        { from: 8, to: 4, quantity: 1 },
        { from: 8, to: 5, quantity: 1 },
        { from: 8, to: 6, quantity: 0 },
        { from: 8, to: 7, quantity: 0 },
        { from: 8, to: 8, quantity: 0 },
        { from: 8, to: 9, quantity: 0 },
        { from: 8, to: 10, quantity: 0 },
        { from: 8, to: 11, quantity: 0 },
        { from: 9, to: 0, quantity: 1 },
        { from: 9, to: 1, quantity: 1 },
        { from: 9, to: 2, quantity: 1 },
        { from: 9, to: 3, quantity: 1 },
        { from: 9, to: 4, quantity: 1 },
        { from: 9, to: 5, quantity: 1 },
        { from: 9, to: 6, quantity: 0 },
        { from: 9, to: 7, quantity: 0 },
        { from: 9, to: 8, quantity: 0 },
        { from: 9, to: 9, quantity: 0 },
        { from: 9, to: 10, quantity: 0 },
        { from: 9, to: 11, quantity: 0 },
        { from: 10, to: 0, quantity: 1 },
        { from: 10, to: 1, quantity: 1 },
        { from: 10, to: 2, quantity: 1 },
        { from: 10, to: 3, quantity: 1 },
        { from: 10, to: 4, quantity: 1 },
        { from: 10, to: 5, quantity: 1 },
        { from: 10, to: 6, quantity: 0 },
        { from: 10, to: 7, quantity: 0 },
        { from: 10, to: 8, quantity: 0 },
        { from: 10, to: 9, quantity: 0 },
        { from: 10, to: 10, quantity: 0 },
        { from: 10, to: 11, quantity: 0 },
        { from: 11, to: 0, quantity: 0 },
        { from: 11, to: 1, quantity: 1 },
        { from: 11, to: 2, quantity: 0 },
        { from: 11, to: 3, quantity: 1 },
        { from: 11, to: 4, quantity: 1 },
        { from: 11, to: 5, quantity: 1 },
        { from: 11, to: 6, quantity: 0 },
        { from: 11, to: 7, quantity:0 },
        { from: 11, to: 8, quantity: 0 },
        { from: 11, to: 9, quantity: 0 },
        { from: 11, to: 10, quantity: 0 },
        { from: 11, to: 11, quantity: 0 }
      ]; // Fallback if file doesn't exist or there’s an error
}

// Serve flows.json through an HTTP GET request
app.get('/flows.json', (req, res) => {
    res.json(flows);  // Respond with the flows data as JSON
});


app.post('/update-flows', (req, res) => {
    // Log the incoming request body
    // console.log('Received request body:', req.body);

    const updatedFlows = req.body.flows;  // Receive the flows array from the client

    if (Array.isArray(updatedFlows)) {
        // console.log('Flows to update:', updatedFlows);  // Log the flows to be updated

        // Iterate over the flows and update them on the server
        updatedFlows.forEach(updatedFlow => {
            const flowIndex = flows.findIndex(flow => flow.from === updatedFlow.from && flow.to === updatedFlow.to);
            if (flowIndex !== -1) {
                flows[flowIndex].quantity = updatedFlow.quantity;
                // console.log('Updated flow:', flows[flowIndex]);
            }
        });

        // Save the updated flows to the file
        saveFlowsToFile(flows); // Save to file
        res.status(200).json({ message: 'Flows updated successfully' });
    } else {
        res.status(400).json({ message: 'Invalid flow data' });
    }
});

// Function to save flows to the JSON file
function saveFlowsToFile(flows) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(flows, null, 2));
        console.log('Flows saved to file.');
    } catch (err) {
        console.error('Error saving flows:', err); // line 213
    }
}

// WebSocket server without exposing flow data to clients
wss.on('connection', (ws) => {
    console.log('WebSocket client connected');
    
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        
        // Broadcast the received message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

// Start the HTTP server
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});