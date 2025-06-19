"use strict";
// code without http sever
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 }); //This initializes the WebSocket server to listen directly on port 8080 (without an attached HTTP server).
wss.on('connection', function connection(ws) {
    console.log("server terminal");
    //This event is triggered every time a new client connects.
    //ws is the WebSocket connection instance representing the client.
    ws.on('error', console.error); //Logs any error that occurs on a client connection to the console.
    //   setInterval(() => {
    //     ws.send("Random is" + Math.random());
    //   }, 10000);
    ws.on('message', (e) => {
        if (e.toString() == 'sali') {
            ws.send('katti bhenchod');
        }
        else {
            ws.send('Invalid input');
        }
    });
    //   ws.on('message', function message(data, isBinary) {
    //     wss.clients.forEach(function each(client) {
    //       if (client.readyState === WebSocket.OPEN) {
    //         client.send(data, { binary: isBinary });
    //       }
    //     });
    //   });
});
