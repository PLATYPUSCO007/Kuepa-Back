const socket = require('socket.io');

const server = (server)=>{
    return new socket.Server(server);
}

module.exports = {
    on: function(serverApp){
        const io = server(serverApp);
        io.on('connection', (socket)=>{
            console.log('a user connected - ', socket);
        })
    }
};