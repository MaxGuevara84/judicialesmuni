import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import dbMysql from '../../Config/databaseMySQL';
import Peticiones_Router from './Peticiones_Router';

class PeticionesController {
    public async listar(req: Request, res: Response){
        try{
            let listaPeticiones: any;
            modeloPeticiones
            .find()
            .then(async (peticiones: any) => {
                if (peticiones && peticiones.length) {
                    listaPeticiones = [...peticiones];
                    responder.sucess(req, res, listaPeticiones);
                  } else {
                    responder.error(req, res, '', 'No hay reclamos para listar', 204);
                  }
            })
        }catch(error){
            console.log(error);
            responder.error(req, res);
        }
    }
} 

export const peticionController = new PeticionesController();