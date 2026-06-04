import express  from  'express'

import { Server } from 'socket.io'
import {createServer} from 'http'
import { Socket } from 'dgram'

const app  = express()
const httpSever =  createServer(app)
const io = new Server(httpSever)

io.on('connection',(socket)=>{
    console.log('a user connected');
console.log(socket.id);


socket.on('tesla',()=>{
    console.log('tesla event recived');

    io.emit('musk')
    
})


    socket.on('disconnect',()=>{
        console.log('a user disconnection');
        
    })

    
})

httpSever.listen(3000,()=>{
    console.log('server start');
    
})