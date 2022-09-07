import { Request, Response } from 'express';
import responder from '../Middlewares/responder';
import dbMysql from '../Config/databaseSQLServerL';

class EjecucionesController {
    public async listar(req: Request, res: Response) {
        try {
            // Obtengo la pagina que se solicita
            const page = req.query.page ? Number(req.query.page) != 0 ? Number(req.query.page) - 1 : Number(req.query.page) : 0;
            // Establezco el limite de items
            const limitOfPages = 20;
            // Realizo la solicitud a la DB ( Ejecuto la query )
            dbMysql.query(`SELECT id_reclamo, fk_denunciante_reclamo, fecha_hora_reclamo, contenido_reclamo, tipo_reclamo, calle_reclamo, numero_reclamo, orientacion_reclamo, lat_reclamo, lng_reclamo, imagen, operador, estado_reclamo, fk_origen, fk_origen_padre, link_redes_sociales, fk_prioridad, eliminado, fecha_hora_eliminado, fecha_hora_finalizado FROM db_sem.dbo_reclamos 
                    LIMIT ${page * limitOfPages},${limitOfPages}`,
                [req.query.reclamo],
                (err: any, results: any, fields: any) => {
                    if (err) {
                        // Si tengo error lo mando al middleware del error
                        responder.error(req, res, err);
                    } else {
                        // Caso contrario mando successs
                        responder.sucess(req, res, results, 'Reclamos obtenidos', 200);
                    }
                });

        } catch (error) {
            console.log(error);
            responder.error(req, res);
        }
    }

         

export const peticionController = new PeticionesController();