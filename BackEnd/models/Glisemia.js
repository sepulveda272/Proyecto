const {Schema, model} = require('mongoose');

const GlisemiaSchema = Schema({
    idExamenGlisemia: {
        type: Number,
        required: true,
        trim: true
    },
    glisemiaBasal:{
        type: String,
        required: [true, 'La glisemiaBasal es obligatorio'],
        trim: true,
    },
    ingestion:{
        type: String,
        required: [true, 'La ingestion es obligatorio'],
        trim: true,
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Glisemia', GlisemiaSchema);