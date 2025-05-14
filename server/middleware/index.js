const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");

const applyMiddlewares = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(morgan("dev"));
  app.use(express.json());

  app.use(cors());
};

module.exports = applyMiddlewares;