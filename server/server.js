const WebSocket = require('ws');
const url = require('url');

const wss = new WebSocket.Server({ port: 8080 });
const clients = new Map(); // userId -> ws

wss.on('connection', (ws, req) => {
    const parsedUrl = url.parse(req.url, true);
    const userId = parsedUrl.query.user;

    if (!userId) {
        ws.close(1008, 'User ID required');
        return;
    }

    clients.set(userId, ws);
    console.log(`${userId} connected`);

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            const { to, text } = data;

            const targetClient = clients.get(to);
            if (targetClient && targetClient.readyState === WebSocket.OPEN) {
                targetClient.send(JSON.stringify({ from: userId, text }));
            } else {
                console.log(`Target user ${to} not connected`);
            }
        } catch (err) {
            console.error('Invalid message format. Expecting JSON with {to, text}');
        }
    });

    ws.on('close', () => {
        clients.delete(userId);
        console.log(` ${userId} disconnected`);
    });

    ws.on('error', (err) => {
        console.error(` Error from ${userId}:`, err);
    });
});

console.log('🚀 WebSocket server running on ws://localhost:8080');
