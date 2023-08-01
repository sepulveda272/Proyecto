import express from 'express';
import cors from 'cors';
import { dbConnection } from '../database/config.js';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios"
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
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarioR.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`estamos en el puerto ${this.port}`);
        })
    }
}

export default Server