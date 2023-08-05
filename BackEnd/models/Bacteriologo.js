const {Schema, model} = require('mongoose');

const BacteriologoSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
    },
    edad:{
        type: String,
        required: [true, 'La edad es obligatorio'],
        trim: true,
    },
    email:{
        type: String,
        required: [true, 'El email es obligatorio'],
        trim: true,
    },
    experiencia:{
        type: String,
        required: [true, 'La experiencia es obligatorio'],
        trim: true,
    },
    cedula:{
        type: String,
        required: [true, 'La cedula es obligatorio'],
        trim: true,
    },
    imagen:{
        type: String,
        required: true,
        trim: true
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Bacteriologo', BacteriologoSchema);