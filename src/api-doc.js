"use strict";

const express = require("express");
const index = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

//Swagger Documentation

module.exports = {
    // method of operation
    get: {
      tags: ["ListarReclamos"], 
      description: "Get Reclamos Paginados", 
      operationId: "peticiones/listar", 
      parameters: [], 
      // expected responses
      responses: {
        // response code
        200: {
          description: "Reclamos obtenidos", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Todo", // Todo model
              },
            },
          },
        },
      },
    },
  };