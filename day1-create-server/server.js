 const http  = require('http')


const server =  http.createServer((req,res)=>{
  console.log('i am conected with server');
    res.end('hello world ji ')
})


server.listen(3000,()=>{
    console.log('server is running port id 3000')
})