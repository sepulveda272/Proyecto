const {Schema, model} = require('mongoose');

const PerfilLipidicoSchema = Schema({
    idExamenPerfil: {
        type: Number,
        required: true,
        trim: true
    },
    glucosa:{
        type: String,
        required: [true, 'La glucosa es obligatorio'],
        trim: true,
    },
    colesterolTotal:{
        type: String,
        required: [true, 'El colestero Total es obligatorio'],
        trim: true,
    },
    colesterolHDL:{
        type: String,
        required: [true, 'El colesterolHDL es obligatorio'],
        trim: true,
    },
    colesterolLDL:{
        type: String,
        required: [true, 'El colesterolLDL es obligatorio'],
        trim: true,
    },
    colesterolVLDL:{
        type: String,
        required: [true, 'El colesterolVLDL es obligatorio'],
        trim: true,
    },
    triglicerios:{
        type: String,
        required: [true, 'El triglicerios es obligatorio'],
        trim: true,
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('PerfilLipidico', PerfilLipidicoSchema);