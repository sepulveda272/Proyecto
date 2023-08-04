const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');

const getUsers = async(req, res)=>{
    const { hasta, desde } = req.query;
    const query = { estado: true };
    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        usuarios
    });
}


const postUsers = async (req, res)=>{
    const {nombre, email, password, rol} = req.body;
    const usuario = new Usuario({nombre, email, password, rol});

    const emailExists = await Usuario.findOne({email});
    if(emailExists){
        return res.status(400).json({
            msg: "Email already exists"
        })
    }

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt)
    await usuario.save();
    res.json({
        "message": "post api",
        usuario
    })
}

const deleteUsers = async (req, res)=>{
    const {id} = req.params
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

    res.json(usuario)
}

const putUsers = async (req, res)=>{
      const { id } = req.params;
      const { _id, password, googleSignIn, ...resto } = req.body;
  
      if ( password ) {a
          const salt = bcryptjs.genSaltSync();
          resto.password = bcryptjs.hashSync( password, salt );
      }
      const usuario = await Usuario.findByIdAndUpdate( id, resto );
  
      res.json({
          msg:"Usuario Actualizado",
          usuario : usuario
      });
  }
  

const patchUsers = (req, res)=>{
    res.json({"message":"patch api"})
}

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}