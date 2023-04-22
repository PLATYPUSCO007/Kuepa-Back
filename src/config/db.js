const {MONGO_URI} = require('./config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect("mongodb+srv://Ricardo:nTwgd9yYgnVKSEZJ@cluster0.77fg4.azure.mongodb.net/KuepaTest?retryWrites=true&w=majority", config)
    .then(function(){
        console.log('Conectado con exito');
    }).catch((e)=>{
        console.log('Error al conectar a la bd ', e);
    });

module.exports = mongoose.connection;