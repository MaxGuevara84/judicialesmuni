import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import {Request, Response, NextFunction} from 'express';
import formData from 'express-form-data';
import responder from './src/Middlewares/responder';
import dbSql from './src//Config/databaseMySQL';
import Ejecuciones_Router from './src/Componentes/Ejecuciones_Router';

//const swaggerJsDoc = require("swagger-jsdoc");
//const swaggerUI = require("swagger-ui-express");

process.env.NODE_ENV = process.env.NODE_ENV || 'desarrollo';
class Server{
    public app: express.Application;
    private options = {
      uploadDir: 'public/archivos/',
      autoClean: true,
    };
    constructor() {
        this.app = express();
        this.conectarBd();
        this.configurar();
        this.routear();
      }
      configurar() {
        this.app.set('port', process.env.PORT || 4600);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(formData.parse(this.options));
        this.app.use(formData.union());
        this.app.use(express.static('public'));
      }
      conectarBd() {
        setTimeout(() => {
          // db;
          dbSql;
        }, 3000);
      }
      routear() {
        //Rutas Basicas
        this.app.get('/', (req: Request, res: Response) => {
          res.send('Server iniciado');
        });
    
        this.app.get('/instalar', (req: Request, res: Response) => {
          console.log('Instalando datos iniciales...');
        });
        
        //TODO:Aca van las rutas que vaya agregando ejemplo this.app.use('/usuarios', usuariosRouter);
        this.app.use('/ejecuciones',Ejecuciones_Router);
        this.app.get('*', (req: Request, res: Response) => {
          console.info(`GET 404: ${req.originalUrl}`);
          responder.noEncontrado(req, res);
        });
      }
      iniciar() {
        this.app.listen(this.app.get('port'), () => {
          console.log(
            `⚡️[RECLAMOS]: El Servidor de ${process.env.NODE_ENV} esta corriendo en el puerto ${process.env.PORT || 4600}`
          );
        });
      }
}
const SERVER = new Server();
SERVER.iniciar();
process.on('uncaughtException', function (err) {
    console.log('Error atrapado: ' + err);
  });