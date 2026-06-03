import express from "express";
import {createServer} from  'http'
import { Server } from "socket.io";

let app = express();
const httpServer = createServer(app)

const io  =  new Server(httpServer)

io.on('connection',(socket)=>{

})
 
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/see", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const intervalId = setInterval(() => {
    res.write(`data: some data in json format\n\n`);
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    res.end();
  }, 10000);
});


httpServer.listen(3000, () => {
  console.log("server start");
});