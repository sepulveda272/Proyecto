const { response } = require("express");
const { ObjectId } = require("mongoose").Types;

const Pacientes = require("../models/Paciente");

const allowedCollections = [
    'pacientes'
]

const searchPacientes = async( criterio = '', res = response ) =>{
    const isMongoId = ObjectId.isValid( criterio );

    if ( isMongoId ) {
        const paciente = await Pacientes.findById( criterio );
        return res.json({
            result: ( paciente) ? [ paciente ] : []
        });
    }

    const regex = new RegExp( criterio, 'i');
    const pacientes = await Pacientes.find({
        $or: [{ examen: regex }],
        $and: [{ estado: true}]
    })

    res.json({
        result: pacientes
    })

}

const search = ( req, res = response ) => {
    const { coleccion, criterio } = req.params;

    if (!allowedCollections.includes(coleccion)){
        return res.status(400).json({
            msg: `El buscador solo permite las colecciones: ${allowedCollections}`
        })
    }

    switch (coleccion){
        case 'pacientes':
            searchPacientes(criterio, res)
        break;

        default:
            res.status(500).json({
                msg: 'This search doesnt exists'
            })
    }
}

module.exports ={
    search
}