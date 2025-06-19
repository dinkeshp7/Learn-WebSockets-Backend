// code without http sever

import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });  //This initializes the WebSocket server to listen directly on port 8080 (without an attached HTTP server).

wss.on('connection', function connection(ws) {  
    console.log("user connected");
    //This event is triggered every time a new client connects.
    //ws is the WebSocket connection instance representing the client.
  ws.on('error', console.error);  //Logs any error that occurs on a client connection to the console.

//   setInterval(() => {
//     ws.send("Random is" + Math.random());
//   }, 10000);

  ws.on('message', (e)=>{
    if(e.toString() == 'ping'){
        ws.send('pong');
    }
    else{
        ws.send('Invalid input');
    }
  })

//   ws.on('message', function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });
});