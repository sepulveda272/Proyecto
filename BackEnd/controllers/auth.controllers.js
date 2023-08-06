const {response}= require("express");
const Usuario = require("../models/Usuario.js");
const bcryptjs = require("bcryptjs");

const login = async (req,res= response)=>{
    const {email,password} = req.body;
    try {
        const emailExists = await Usuario.findOne({email});
        
        if(!emailExists){
            return res.status(400).json({
                msg: "el email no existe"
            })
        }

        if(emailExists.estado === false){
            return res.status(404).json({
                msg: "el usuario no esta activo"
            })
        }

        const passwordValid = bcryptjs.compareSync(password,emailExists.password);
        if(!passwordValid){
            return res.status(400).json({
                msg: "el password no es correcta"
            })
        }

        res.json({
            msg: "All good duuuuuude",
            success: true
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg: "datos insuficientes, contacte a servicio tecnico.. juan"
        })
    }
}

module.exports = {
    login
}