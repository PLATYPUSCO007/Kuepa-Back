require('./src/config/config');
const db = require('./src/config/db');
const apiRoute = require('./src/routes/index');
const {NOT_FOUND_MIDDLEWARE} = require('./src/middlewares');
// const {SocketService} = require('./src/services');

const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const cookieSesion = require('cookie-session');

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: true,
        credentials: true,
        methods: ['GET', 'POST']
    }
});
// SocketService.on(server);

app.use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(helmet())
    .use(compression())
    .use(cors({
        credentials: true,
        origin: ["http://localhost:4200"],
    }))
    .use(cookieSesion({
        name: 'chat_kuepa',
        secret: process.env.COOKIE_SECRET,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    }));


app.use('/api/v1', apiRoute);
app.use(NOT_FOUND_MIDDLEWARE);

io.on('connection', (socket) => {
    const idHanshake = socket.id;
    // const {name} = socket.handshake.query;
    socket.on('test', (user)=>{
        console.log(`a user ${user.name} connected `, idHanshake);
        socket.emit('test2', 'Logueado');
    })
});

const port = process.env.PORT || 3000;
server.listen(port, ()=>{
    console.log(`Server runnig on localhost:${port}`);
})
