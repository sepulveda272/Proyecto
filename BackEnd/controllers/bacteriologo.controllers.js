const Bacteriologo = require('../models/Bacteriologo')

const getBacteriologo = async (req,res) =>{
    try {
        const bacteriologo = await Bacteriologo.findOne({_id:req.params.id})
        res.json(bacteriologo);
    } catch (error) {
        console.log(error);
    }
}

const getBacteriologos = async(req,res)=>{
    const { hasta, desde } = req.query;
    const query = {estado: true}
    const [ total, bacteriologos ] = await Promise.all([
        Bacteriologo.countDocuments(query),
        Bacteriologo.find(query)
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        bacteriologos
    })
}

const postBacteriologo = async(req, res ) => {
    const {nombre, edad, email, experiencia, cedula,imagen} = req.body;
    const bacteriologo = new Bacteriologo({nombre, edad, email, experiencia, cedula, imagen});

    const emailExists = await Bacteriologo.findOne({email});
    if(emailExists){
        return res.status(400).json({
            msg: "El email ya existe en de DB"
        })
    }

    const cedulaExists = await Bacteriologo.findOne({cedula});
    if(cedulaExists){
        return res.status(400).json({
            msg: "La cedula ya existe en de DB"
        })
    }

    await bacteriologo.save();
    res.json({
        "message": "post api",
        bacteriologo
    })
}

const deleteBacteriologo = async (req, res)=>{
    const {id} = req.params
    const bacteriologo = await Bacteriologo.findByIdAndUpdate( id, { estado: false } );
    return res.status(200).json({bacteriologo,
        msg : 'Bacteriologo eliminada correctamente'
    });
}

const updateBacteriologo = async(req, res)=>{
    const {id} = req.params;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const email = req.body.email;
    const experiencia = req.body.experiencia;
    const cedula = req.body.cedula;
    const imagen = req.body.imagen
    const bacteriologo = await Bacteriologo.findByIdAndUpdate(id, {nombre,edad,email,experiencia,cedula,imagen},{ new: true });
    return res.status(200).json({bacteriologo,
        msg : 'El bacteriologo fue actualizado correctamente'
    });
}


module.exports = {
    getBacteriologo,getBacteriologos,postBacteriologo,deleteBacteriologo,updateBacteriologo
}