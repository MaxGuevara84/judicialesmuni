import { Request, Response } from 'express';
import responder from '../Middlewares/responder';
import dbSql from '../Config/databaseMySQL';

class EjecucionesController {
    public async listar(req: Request, res: Response) {
        try {
            // Obtengo la pagina que se solicita
            const page = req.query.page ? Number(req.query.page) != 0 ? Number(req.query.page) - 1 : Number(req.query.page) : 0;
            // Establezco el limite de items
            const limitOfPages = 20;
            // Realizo la solicitud a la DB ( Ejecuto la query )
            dbSql.query(`SELECT * FROM ASIT_EJECUCION_CRYSTAL
                    LIMIT ${page * limitOfPages},${limitOfPages}`,
                [req.query.reclamo],
                (err: any, results: any, fields: any) => {
                    if (err) {
                        // Si tengo error lo mando al middleware del error
                        responder.error(req, res, err);
                    } else {
                        // Caso contrario mando successs
                        responder.sucess(req, res, results, 'Resultados obtenidos', 200);
                    }
                });

        } catch (error) {
            console.log(error);
            responder.error(req, res);
        }
    }

}     

export const ejecucionController = new EjecucionesController();