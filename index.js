const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {
    ws.on("message", message => {
        //back into native JavaScript
        const data =JSON.parse(message);
        console.log(data.x, data.y)
        
    });
});