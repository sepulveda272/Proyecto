const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    email:{
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },

    password:{
        type: String,
        required: [true, 'El password es obligatorio']
    },

    rol:{
        type: String,
        required: true,
        default: 'BACT',
        /* enum: ['BACT','PCT'] */
    },

    estado:{
        type: Boolean,
        default: true
    },

    googleSignIn:{
        type: Boolean,
        default: false
    }
});

module.exports = model('Usuario', UsuarioSchema);