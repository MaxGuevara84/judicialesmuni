import { Request, response, Response } from 'express';
import responder from '../Middlewares/responder'
import dbMysql from '../Config/databaseMySQL'
import Peticiones_Router from './Peticiones_Router';

class PeticionesController {
    public async listar(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: 'Hola mundo!',
                success: true
            })
        } catch (error) {
            console.log(error);
            responder.error(req, res);
        }
    }

    public async getCatalogs(req: Request, res: Response) {
        try {
            dbMysql.query('SELECT * FROM dbo_areas', [req.query.dominio], (areaError: any, areaResult: any) => {
                const areas = areaResult;
                if (areaError) {
                    responder.error(req, res, areaError, 'Ocurrió un error al buscar los catalogos');
                }
                dbMysql.query('SELECT * FROM dbo_tipo_estado', [req.query.dominio], (statusTypeError: any, statusTypeResult: any) => {
                    const tipo_estado = statusTypeResult;
                    if (statusTypeError) {
                        responder.error(req, res, areaError, 'Ocurrió un error al buscar los catalogos');
                    }
                    dbMysql.query('SELECT * FROM dbo_areas', [req.query.dominio], (claimTypeError: any, claimTypeResult: any) => {
                        const tipo_reclamo = claimTypeResult;
                        if (claimTypeError) {
                            responder.error(req, res, claimTypeError, 'Ocurrió un error al buscar los catalogos');
                        }
                        dbMysql.query('SELECT * FROM dbo_areas', [req.query.dominio], (movementTypeError: any, movementTypeResult: any) => {
                            const tipo_movimiento = movementTypeResult;
                            if (movementTypeError) {
                                responder.error(req, res, movementTypeError, 'Ocurrió un error al buscar los catalogos');
                            }
                            dbMysql.query('SELECT * FROM dbo_tipo_consulta', [req.query.dominio], (queryTypeError: any, queryTypeResult: any) => {
                                const tipo_consulta = queryTypeResult;
                                if (queryTypeError) {
                                    responder.error(req, res, queryTypeError, 'Ocurrió un error al buscar los catalogos');
                                }
                                dbMysql.query('SELECT * FROM dbo_tipo_motivo', [req.query.dominio], (motivoTypeError: any, motivoTypeResult: any) => {
                                    const tipo_motivo = motivoTypeResult;
                                    if (motivoTypeError) {
                                        responder.error(req, res, motivoTypeError, 'Ocurrió un error al buscar los catalogos');
                                    }
                                    dbMysql.query('SELECT * FROM dbo_tipo_origen', [req.query.dominio], (sourceTypeError: any, sourceTypeResult: any) => {
                                        const tipo_origen = sourceTypeResult;
                                        if (sourceTypeError) {
                                            responder.error(req, res, sourceTypeError, 'Ocurrió un error al buscar los catalogos');
                                        }
                                        dbMysql.query('SELECT * FROM dbo_tipo_prioridad', [req.query.dominio], (priorityTypeError: any, priorityTypeResult: any) => {
                                            const tipo_prioridad = priorityTypeResult;
                                            if (priorityTypeError) {
                                                responder.error(req, res, priorityTypeError, 'Ocurrió un error al buscar los catalogos');
                                            }

                                            const resultData = {
                                                areas,
                                                tipo_estado,
                                                tipo_reclamo,
                                                tipo_movimiento,
                                                tipo_consulta,
                                                tipo_motivo,
                                                tipo_origen,
                                                tipo_prioridad,
                                            }

                                            responder.sucess(req, res, resultData, 'Catalogos', 200);
                                        });
                                    });
                                });
                            });

                        });
                    });
                });

            });
        } catch (error) {
            console.error(error);
            responder.error(req, res, undefined, 'Error interno en servidor');

        }
    }
}

export const peticionController = new PeticionesController();