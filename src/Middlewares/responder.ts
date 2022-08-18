import {Request, Response} from 'express';
import express from 'express';

//swagger
const app = express();
const userRoute = require("./src/Componentes/Peticiones_Router")
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path")
const swaggerSpec ={
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ApiReclamos",
      version: "2.0.0",
    },
    servers: [
       {
         url: "https://wsautenticacion.municipiosanjuan.gob.ar/peticiones"
       }
    ]
  },
  apis: [`${path.joun(__dirname,"./src/Componentes/Peticiones_Router/*.js")}`]
}

//Middlewares Swagger
app.use(express.json()),
app.use("/api", userRoute);
app.use("/api.doc", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)))


//Response
const responder = {
  sucess: (req: Request, res: Response, value?: any, message?: string, status?: number) => {
    let statusCode = status || 200;
    let statusMessage = message || 'ok';
    res.status(statusCode).json({
      error: false,
      status: statusCode,
      message: statusMessage,
      value: value,
    });
  },
  error: (req: Request, res: Response, err?: any, message?: string, status?: number) => {
    let statusCode = status || 500;
    let statusMessage = message || 'Error interno del servidor.';
    let errorObject = err || {};
    console.error(errorObject);
    res.status(statusCode).json({
      error: true,
      status: statusCode,
      message: statusMessage,
    });
  },
  noAutorizado: (req: Request, res: Response) => {
    let statusCode = 401;
    res.status(statusCode).json({
      error: true,
      status: statusCode,
      message: 'No posee autorización para acceder a la ruta solicitada.',
    });
  },
  noEncontrado: (req: Request, res: Response) => {
    let statusCode = 404;
    res.status(statusCode).json({
      error: true,
      status: statusCode,
      message: 'Ruta inexistente.',
    });
  },
};

export default responder;
