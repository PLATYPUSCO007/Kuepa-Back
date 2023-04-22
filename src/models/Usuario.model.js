const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    nombre: String,
    usuario: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    tipo_usuario: {
        type: String,
        enum: ['Estudiante', 'Moderador'],
        required: true
    }
});

UsuarioSchema.methods.comparePasswords = function (passwordLogin) {
    console.log(passwordLogin, this.password);
    return (passwordLogin == this.password);
}

module.exports = mongoose.model('Usuario', UsuarioSchema);