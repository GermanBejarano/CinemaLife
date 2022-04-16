const swaggerJsdoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API CinemaLife",
    description: "Esta documentación de api de genera automaticamente",
    version: "1.0.0",
    contact: {
      name: "GermanB",
      email: "gbejarnoma@test.com",
    }
  },
  servers: [
    {
      url: "http://localhost:3100",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./docs/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification;