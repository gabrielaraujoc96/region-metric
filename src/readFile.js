const fs = require("fs");
const readLine = require("readline");
const dbQueries = require("./queries/transactionQueries.js");

var database;
var documents = [];

function readLocalFile() {
  const lineReader = readLine.createInterface({
    input: fs.createReadStream(process.env.FILE_PATH),
  });

  lineReader.on("line", function (lineData) {
    try {
      documents.push(dataParser(lineData));
    } catch (err) {
      console.log(err);
      dbQueries.deleteAll(database);
      process.exit();
    }
  });

  lineReader.on("close", function () {
    console.log("Finished reading file. Saving documents.");
    saveDocuments(documents);
  });
}

function dataParser(lineData) {
  const data = JSON.parse(lineData);
  const dataParsed = JSON.parse(data["Body"]);
  const dataHeaders = JSON.parse(dataParsed["Headers"]);
  const dataBody = JSON.parse(dataParsed["Body"]);

  return {
    platform: data.MessageAttributes.platform.StringValue,
    header: dataHeaders,
    body: dataBody,
    messageAttributes: data.MessageAttributes,
    attributes: parseAttributes(data.Attributes),
  };
}

function parseAttributes(attributes) {
  let dateTimestamp = attributes.ApproximateFirstReceiveTimestamp;
  let date = new Date(parseInt(dateTimestamp));
  let att = attributes;

  att["ApproximateFirstReceiveFullDate"] =
    getApproximateFirstReceiveFullDate(date);
  att["ApproximateFirstReceiveDate"] = getApproximateFirstReceiveDate(date);

  return att;
}

function getApproximateFirstReceiveFullDate(date) {
  return (
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds()
  );
}

function getApproximateFirstReceiveDate(date) {
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
}

function saveDocuments(documents) {
  // dbQueries.insertMessages(database, documents);
}

module.exports = {
  run: function (db) {
    database = db;
    readLocalFile();
  },
};
