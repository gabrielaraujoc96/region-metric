"use strict";

const readline = require("readline");
const dbQueries = require("../queries/transactionQueries.js");
const MongoConnector = require("../connectors/MongoConnector.js");
const mongo = require("mongodb");

const mongoConnection = new MongoConnector("localhost");

var id = "";
var endpoint = "";
var requestDocument = null;
var request = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getId = () => {
  return new Promise((resolve, reject) => {
    rl.question("Id of the request\n", (answer) => {
      id = answer;
      resolve();
    });
  });
};

const getEndpoint = () => {
  return new Promise((resolve, reject) => {
    rl.question("Endpoint of the request. Ex.: update\n", (answer) => {
      endpoint = answer;
      resolve();
    });
  });
};

const getDocument = () => {
  return new Promise((resolve, reject) => {
    mongoConnection.connect(function (err) {
      if (err) console.log(err);
      const database = mongoConnection.getDb();
      var o_id = new mongo.ObjectID(id);

      dbQueries.getMessage(database, o_id, function (document) {
        if (!document) {
          throw "Document not found, please, check if the id value is correct.";
        }
        requestDocument = document;
        resolve();
      });
    });
  });
};

function _buildRequest() {
  let headers = requestDocument["header"];
  request = `curl --location --request POST 'http://localhost:3001/${endpoint}' `;

  for (var header in headers) {
    request = request + `--header '${header}: ${headers[header]}' `;
  }

  request = request + `--data-raw '${JSON.stringify(requestDocument["body"])}'`;

  console.log("You can copy and paste this to retry the request.\n");
  console.log(request);
}

const main = async () => {
  await getId();
  await getEndpoint();

  rl.close();

  console.log("Searching your request, please wait...");
  await getDocument();

  _buildRequest();

  process.exit(0);
};

main();
