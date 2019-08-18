const path=require('path')
const http=require('http')
const express=require('express')

const socketio=require('socket.io')
const app=express()
const server=http.createServer(app)
const io=socketio(server)
const port=process.env.PORT||3000

const publicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

io.on('connection',(socket)=>{
    console.log('new websocket connection ')

    socket.emit('message','welcome')
    socket.broadcast.emit('message','A new user has arrived')
    socket.on('sendmessage',(message)=>{
           io.emit('message',message)
    })
    socket.on('disconnect',()=>{
        io.emit('message','A user has left')
    })
})

/*    socket.emit('countupdated',count)
    socket.on('increment',()=>{
        count++
        io.emit('countupdated',count)
        //socket.emit('countupdated',count)
    })
})*/

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})