require("dotenv").config();
const Koa = require('koa');
const routes = require('./src/routes');
const express = require("express");
// const bodyParser = require("body-parser");
const dbQueries = require("./src/queries/transactionQueries");
const MongoConnector = require("./src/connectors/MongoConnector.js");
const bodyParser = require('koa-bodyparser');
// const setupMetabase = require('./src/scripts/setupMetabase');
// const { run } = require("./src/readFile.js");

const mongoConnection = new MongoConnector();

mongoConnection.connect(function (err) {
  if (err) console.log(err);
  const database = mongoConnection.getDb();
  // console.log("Cleaning database...");

  // dbQueries.deleteAll(database, function () {
  //   // console.log("Start importing");
  //   // setupMetabase();
  //   // run(database);
  // });
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


// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.listen(port, function() {
//   console.log(`App de Exemplo escutando na porta ${port}!`);
// });    


// process.on("exit", function () {
//   console.log("**************************************");
//   console.log("**************************************");
//   console.log("**************************************");
//   console.log("**************************************");
//   console.log("Finishing read script. Run setupMetabase script.");
//   console.log("**************************************");
//   console.log("**************************************");
//   console.log("**************************************");
// });
