const {Schema, model} = require('mongoose');

const PacienteSchema = Schema({
    idPaciente: {
        type: Number,
        unique: true,
        default: 1,
    },
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
    sexo:{
        type: String,
        required: [true, 'El sexo es obligatorio'],
        trim: true,
    },
    direccion:{
        type: String,
        required: [true, 'La direccion es obligatorio'],
        trim: true,
    },
    celular:{
        type: String,
        required: [true, 'El celular es obligatorio'],
        trim: true,
    },
    fecha:{
        type: String,
        required: [true, 'La fecha es obligatorio'],
        trim: true,
    },
    hora:{
        type: String,
        required: [true, 'La hora es obligatorio'],
        trim: true,
    },
    nombreBacteriologo:{
        type: String,
        required: [true, 'El nombre del bacteriologo es obligatorio'],
        trim: true,
    },
    examen:{
        type: String,
        required: [true, 'El examen es obligatorio'],
        trim: true,
    },
    estado:{
        type: Boolean,
        default: true
    }
});

PacienteSchema.pre('save', async function (next) {
    const latestExam = await this.constructor.findOne({}, {}, { sort: { idPaciente: -1 } });
    if (latestExam) {
      this.idPaciente = latestExam.idPaciente + 1;
    }
    next();
  });

module.exports = model('Paciente', PacienteSchema);