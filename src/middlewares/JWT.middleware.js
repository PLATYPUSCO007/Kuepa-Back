const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/config');

module.exports = {
    validateToken: function(req, res, next){
        const token = req.session.token;
        if (!token) {
            res.status(401).json({error: 'No hay Token!'});
            return;
        }
    
        jwt.verify(token, JWT_SECRET, function (error, decode) {
            if (error) {
                req.session = null;
                res.status(401).json({error: 'Token no valido!'});
                return;
            }
    
            req.user = decode.user;
            next();
        })
    
    },

    deleteSession: function(req, res, next) {
        try {
            req.session = null;
            next();
        } catch (error) {
            res.status(401).json({error: 'Error al cerrar sesion!'});
        }
    }
    
}