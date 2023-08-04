const Glisemia = require('../models/Glisemia')

const getGlisemia = async(req,res)=>{
    const { hasta, desde } = req.query;
    const query = {estado: true}
    const [ total, glisemia ] = await Promise.all([
        Glisemia.countDocuments(query),
        Glisemia.find(query)
            .skip(Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        glisemia
    })
};

const postGlisemia = async(req, res ) => {
    const {idExamenGlisemia, glisemiaBasal, ingestion} = req.body;
    const glisemia = new Glisemia({idExamenGlisemia, glisemiaBasal, ingestion});
    await glisemia.save();
    res.json({
        "message": "post api",
        glisemia
    })
}

const deleteGlisemia = async (req, res)=>{
    const {id} = req.params
    const glisemia = await Glisemia.findByIdAndUpdate( id, { estado: false } );
    return res.status(200).json({glisemia,
        msg : 'el resultado de la glisemia fue eliminada correctamente'
    });
}

const updateGlisemia = async(req, res)=>{
    const {id} = req.params;
    const glisemiaBasal = req.body.glisemiaBasal;
    const ingestion = req.body.ingestion;
    const glisemia = await Glisemia.findByIdAndUpdate(id, {glisemiaBasal,ingestion},{ new: true });
    return res.status(200).json({glisemia,
        msg : 'el resultado de la glisemia fue actualizado correctamente'
    });
}

module.exports = {
    getGlisemia,postGlisemia,deleteGlisemia,updateGlisemia
}