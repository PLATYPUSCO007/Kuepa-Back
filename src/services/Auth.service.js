const {USUARIO_SCHEMA} = require('../models');
const {JWT_HELPER} = require('../helpers');

module.exports = {
    sigIn: async function (user) {
        try {
            const {usuario, password} = user;
            const userExist = await USUARIO_SCHEMA.findOne({usuario});
    
            if (!userExist) {
                return new Error('El usuario no es valido');
            }
    
            const isValidPassword = userExist.comparePasswords(password);
    
            if (!isValidPassword) {
                return new Error('El password no es valido')
            }
    
            const token = JWT_HELPER.generateToken(userExist);
    
            return {
                token,
                user: userExist
            }
        } catch (error) {
            console.error(error);
            return new Error('Las credenciales no son validas!');
        }

    }
}