const PerfilLipidico = require('../models/PerfilLipidico')

const getPerfil = async (req,res) =>{
    try {
        const perfi = await PerfilLipidico.findOne({idExamenPerfil:req.params.id})
        res.json(perfi);
    } catch (error) {
        console.log(error);
    }
}

const getPerfilLipidicos = async(req,res)=>{
    const { hasta, desde } = req.query;
    const query = {estado: true}
    const [ total, perfilLipidico ] = await Promise.all([
        PerfilLipidico.countDocuments(query),
        PerfilLipidico.find(query)
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        perfilLipidico
    })
};

const postPerfilLipidico = async(req, res ) => {
    const {idExamenPerfil, glucosa, colesterolTotal, colesterolHDL, colesterolLDL,colesterolVLDL,triglicerios} = req.body;
    const lipidico = new PerfilLipidico({idExamenPerfil, glucosa, colesterolTotal, colesterolHDL, colesterolLDL,colesterolVLDL,triglicerios});
    await lipidico.save();
    res.json({
        "message": "post api",
        lipidico
    })
}

const deletePerfilLipidico = async (req, res)=>{
    const {id} = req.params
    const lipidico = await PerfilLipidico.findByIdAndUpdate( id, { estado: false } );
    return res.status(200).json({lipidico,
        msg : 'el resultado del perfil lipidico fue eliminada correctamente'
    });
}

const updatePerfilLipidico = async(req, res)=>{
    const {id} = req.params;
    const glucosa = req.body.glucosa;
    const colesterolTotal = req.body.colesterolTotal;
    const colesterolHDL = req.body.colesterolHDL;
    const colesterolLDL = req.body.colesterolLDL;
    const colesterolVLDL = req.body.colesterolVLDL;
    const triglicerios = req.body.triglicerios;
    const lipidico = await PerfilLipidico.findByIdAndUpdate(id, {glucosa,colesterolTotal,colesterolHDL,colesterolLDL,colesterolVLDL,triglicerios},{ new: true });
    return res.status(200).json({lipidico,
        msg : 'el resultado del perfil lipidico fue actualizado correctamente'
    });
}

module.exports = {
    getPerfil,getPerfilLipidicos,postPerfilLipidico,deletePerfilLipidico,updatePerfilLipidico
}