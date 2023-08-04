const Paciente = require('../models/Paciente')

const getPaciente = async(req,res)=>{
    const { hasta, desde } = req.query;
    const query = {estado: true}
    const [ total,pacientes ] = await Promise.all([
        Paciente.countDocuments(query),
        Paciente.find(query)
            .skip(Number( desde ))
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        pacientes
    })
}

const postPaciente = async(req, res ) => {
    const {nombre, edad, sexo, direccion, celular,fecha,hora,nombreBacteriologo,examen} = req.body;
    const paciente = new Paciente({nombre, edad, sexo, direccion, celular,fecha,hora,nombreBacteriologo,examen});

    const nombreExists = await Paciente.findOne({nombre});
    if(nombreExists){
        return res.status(400).json({
            msg: "El nombre ya existe en de DB"
        })
    }

    await paciente.save();
    res.json({
        "message": "post api",
        paciente
    })
}

const deletePaciente = async (req, res)=>{
    const {id} = req.params
    const paciente = await Paciente.findByIdAndUpdate( id, { estado: false } );
    return res.status(200).json({paciente,
        msg : 'Paciente eliminada correctamente'
    });
}

const updatePaciente = async(req, res)=>{
    const {id} = req.params;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const sexo = req.body.sexo;
    const direccion = req.body.direccion;
    const celular = req.body.celular;
    const fecha = req.body.fecha;
    const hora = req.body.hora;
    const nombreBacteriologo = req.body.nombreBacteriologo;
    const examen = req.body.examen;
    const paciente = await Paciente.findByIdAndUpdate(id, {nombre,edad,sexo, direccion,celular,fecha,hora,nombreBacteriologo,examen},{ new: true });
    return res.status(200).json({paciente,
        msg : 'El paciente fue actualizado correctamente'
    });
}

const patchPaciente = (req, res)=>{
    res.json({"message":"patch api"})
}

module.exports = {
    getPaciente,postPaciente,deletePaciente,updatePaciente,patchPaciente
}