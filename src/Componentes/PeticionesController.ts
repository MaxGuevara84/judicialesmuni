import {Request, Response} from 'express';
import responder from '../Middlewares/responder'
import dbMysql from '../Config/databaseMySQL'
import Peticiones_Router from './Peticiones_Router';

class PeticionesController {
    public async listar(req: Request, res: Response){
        try{
           res.status(200).json({
               message: 'Hola mundo!',
               success: true
           })
        }catch(error){
            console.log(error);
            responder.error(req, res);
        }
    }
} 

export const peticionController = new PeticionesController();