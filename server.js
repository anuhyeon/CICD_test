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
// server는 HTTP 서버 객체이므로, Express의 라우팅 메서드를 직접 사용할 수 없음. 
//Express 라우트는 app 객체에서 정의해야 함. 
// server 객체는 HTTP 서버를 시작하고 WebSocket 서버를 바인딩하는 데 사용되고,
// 라우팅은 app 객체에서 처리하는 것이 맞음.
app.get('/', (req, res) => {
    res.send('암묭');
});

app.get('/json', (req, res) => {
    res.json({ message: '암묭', status: 'success' });
});

app.get('/html', (req, res) => {
    res.send('<h1>암묭!</h1><p>하하하하하하.</p>');
});

// app.get('/file', (req, res) => {
//     res.sendFile(path.join(__dirname, 'path/to/your/file.txt'));
// });

app.get('/status', (req, res) => {
    const serverProfile = process.env.PROFILES || 'No color set'
    res.status(200).send(`${serverProfile}`);
});

server.listen(process.env.PORT || 44444, () => {
    console.log(process.env.PORT)
    console.log(`Server running on port:${process.env.PROFILE}`);
});
