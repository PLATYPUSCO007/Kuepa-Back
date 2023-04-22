const {CoreService} = require('../services');
const {USUARIO_SCHEMA} = require('../models');

const UsuarioController = {
    insert: async function (req, res) {
        try {
            let usuario = new USUARIO_SCHEMA(req.body);
            await CoreService.create(USUARIO_SCHEMA, usuario);
            res.status(200).json({msg: 'Creado con exito!'})
        } catch (error) {
            res.status(401).json({error});
        }
    },
    list: async function (req, res) {
        try {
            let usuarios = await CoreService.list(USUARIO_SCHEMA);
            res.status(200).json({usuarios});
        } catch (error) {
            res.status(401).json({error});
        }
    }
}

module.exports = UsuarioController;