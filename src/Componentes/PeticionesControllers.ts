import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import dbMysql from '../../Config/databaseMySQL';

class SoliciudesController {
    public async listar(req: Request, res: Response){
        try{
            let listaSolcitudes: any;
            modeloPeticiones
            .find()
            .then(async (peticiones: any) => {
                if (peticiones && peticiones.length) {
                    listaSolcitudes = [...peticiones];
                    responder.sucess(req, res, listaSolcitudes);
                  } else {
                    responder.error(req, res, '', 'No hay reclamos para listar', 204);
                  }
            })
        }catch(error){
            console.log(error);
            responder.error(req, res);
        }
    }
 
  

export const peticionController = new PeticionesController();