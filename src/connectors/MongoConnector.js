/**************************************************************
//
//  MongoConnector.js
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
const mongoDb = require("mongodb");
const MongoClient = mongoDb.MongoClient;
var database;

/* **************************************************************************************************
**
**  MARK: This class is responsible to do all the connection to our locally database MongoDB and it's creation
**
****************************************************************************************************/
class MongoConnector {
  constructor(connectionUrl) {
    if (connectionUrl) {
      this.connectionUrl = connectionUrl;
    } else {
      this.connectionUrl = "mongo";
    }
  }

  async connect(callback) {
    let url = `mongodb://${this.connectionUrl}:27017`;
    MongoClient.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err, client) {
        database = client.db("mongo");
        return callback(err);
      }
    );
  }

  getDb() {
    return database;
  }
}

module.exports = MongoConnector;
