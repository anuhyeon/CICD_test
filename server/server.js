const express = require('express');

const WebSocket = require('ws');
const http = require('http');
const { setupWSConnection } = require('y-websocket/bin/utils');
const app = express();


const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

// app.use(express.static('../client/build'))
// app.get('/', (req,res) => {
//     res.sendFile('index.html');
// });

wss.on('connection', (ws, req) => {
    setupWSConnection(ws, req);
});

server.listen(1236, () => {
    console.log('Sserver running on172.16.250.111:1236');
});
