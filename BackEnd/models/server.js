const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios"
        this.authPath = "/api/auth";
        this.pacientesPath = "/api/pacientes";
        this.bacteriologosPath = "/api/bacteriologos";
        this.cuadroHematicoPath = "/api/cuadroHematico";
        this.glisemiaPath = "/api/glisemia";
        this.perfilLipidicoPath = "/api/perfilLipidico";
        this.searchPath = "/api/search";
        this.connectDB();
        this.middleware();
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('FrontEnd'));
    }

    routes(){
        this.app.use(this.authPath, require('../routes/auth.routes.js'));
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));
        this.app.use(this.pacientesPath, require('../routes/pacientes.routes.js'));
        this.app.use(this.bacteriologosPath, require('../routes/bacteriologo.routes.js'));
        this.app.use(this.cuadroHematicoPath, require('../routes/cuadroHematico.routes.js'));
        this.app.use(this.glisemiaPath, require('../routes/glisemia.routes.js'));
        this.app.use(this.perfilLipidicoPath, require('../routes/perfilLipidico.routes.js'));
        this.app.use(this.searchPath, require('../routes/search.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`estamos en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;