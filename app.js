/**************************************************************
//
//  alertConfirmation.js
//  Region Metric
//
//  Created by Gabriel Araujo on 20/01/2022.
//
**************************************************************/

/* **************************************************************************************************
**
**  MARK: Variables declaration
**
****************************************************************************************************/
require("dotenv").config();
const Koa = require('koa');
const routes = require('./src/routes');
const express = require("express");
const dbQueries = require("./src/queries/transactionQueries");
const MongoConnector = require("./src/connectors/MongoConnector.js");
const bodyParser = require('koa-bodyparser');

const mongoConnection = new MongoConnector();

/* **************************************************************************************************
**
**  MARK: This is the initial class of the project and it's the one responsible by creating the mongo
**  connection and the service
**
****************************************************************************************************/
mongoConnection.connect(function (err) {
  if (err) console.log(err);
});

const port = process.env.port || 3001
const app = new Koa();
  
app.use(bodyParser());

app.use(routes.routes());
app.use(routes.allowedMethods());

const server = app.listen(port, () => {
  const host = server.address().address;
  console.log(`Server listening at: http://${host}:${port}`);
});
