require("dotenv").config();
const express = require('express');
const { dbConnectMySql } = require("./config/mysql");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

// Port configuration
const port = process.env.PORT || 3400;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json(({ extended: true })));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Rest
app.use("/api", require("./routes"));


app.listen(port, () =>
  console.log(`http://localhost:${port}/api`)
);

dbConnectMySql();