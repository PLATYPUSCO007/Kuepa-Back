const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MensajeSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    message: String,
    timestamp: Date
})

module.exports = mongoose.model("Mensaje", MensajeSchema);