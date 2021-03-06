const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {
    ws.on("message", message => {
        try {
            //back into native JavaScript
            const data = JSON.parse(message);

            console.log(data.x, data.y)
        } catch (e) {
            console.log(`Something went wrong with the message: ${e.message}`);
        }

    });
});