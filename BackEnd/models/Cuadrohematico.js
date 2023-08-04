const {Schema, model} = require('mongoose');

const CuadroHematicoSchema = Schema({
    idExamenCuadro: {
        type: Number,
        required: true,
        trim: true
    },
    hematocrito:{
        type: String,
        required: [true, 'El hematocrito es obligatorio'],
        trim: true,
    },
    hemoglobina:{
        type: String,
        required: [true, 'El hemoglobina es obligatorio'],
        trim: true,
    },
    eritrocitos:{
        type: String,
        required: [true, 'El eritrocitos es obligatorio'],
        trim: true,
    },
    leucositos:{
        type: String,
        required: [true, 'El leucositos es obligatorio'],
        trim: true,
    },
    neutrofilos:{
        type: String,
        required: [true, 'El neutrofilos es obligatorio'],
        trim: true,
    },
    eosinofilos:{
        type: String,
        required: [true, 'El eosinofilos es obligatorio'],
        trim: true,
    },
    linfocitos:{
        type: String,
        required: [true, 'El linfocitos es obligatorio'],
        trim: true,
    },
    plaquetas:{
        type: String,
        required: [true, 'El plaquetas es obligatorio'],
        trim: true,
    },
    proteinasTotales:{
        type: String,
        required: [true, 'El proteinasTotales es obligatorio'],
        trim: true,
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('CuadroHematico', CuadroHematicoSchema);