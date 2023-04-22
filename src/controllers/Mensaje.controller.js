const {CoreService} = require('../services');
const {MENSAJE_SCHEMA} = require('../models');

const MensajeController = {
    insert: async function (req, res) {
        try {
            let {username, message} = req.body;
            let mensaje = new MENSAJE_SCHEMA({username, message, timestamp: new Date()});
            await CoreService.create(MENSAJE_SCHEMA, mensaje);
            res.status(200).json({msg: 'Creado con exito!'})
        } catch (error) {
            res.status(401).json({error});
        }
    },
    list: async function(req, res){
        try {
            let mensajes = await CoreService.list(MENSAJE_SCHEMA);
            res.status(200).send(mensajes);
        } catch (error) {
            res.status(401).json({error});
        }
    }
}

module.exports = MensajeController;