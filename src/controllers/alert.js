/**************************************************************
//
//  alert.js
//  Region Metric
//
//  Created by Gabriel Araujo on 20/12/2022.
//
**************************************************************/

/* **************************************************************************************************
**
**  MARK: Variables declaration
**
****************************************************************************************************/
const dbQueries = require("../queries/transactionQueries");
const MongoConnector = require("../connectors/MongoConnector.js");
const mongoConnection = new MongoConnector();

/* **************************************************************************************************
**
**  MARK: This class is responsible to do all the business logical withing the Alert, like getting
**  an alert, creating and listing all alerts.
**
****************************************************************************************************/
class Alert {
  async get(alert_id) {
    return new Promise((resolve, reject) => {
      try {
        dbQueries.getAlert(mongoConnection.getDb(), alert_id, function (alert) {
          if (alert) {
            resolve({ alert });

            return;
          }
          resolve({ response: 'Not found' });  
        });
      } catch(error) {
        reject({ response: `Error ${error}`});
      }
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      try {
        dbQueries.getAlerts(mongoConnection.getDb(), function (alerts) {
          if (alerts) {
            resolve({ alerts: alerts });  
          }

          resolve({ response: 'Not found' });  
        });
      } catch(error) {
        reject({ response: `Error ${error}`});
      }
    });
  }

  async post(alert) {
    return new Promise((resolve, reject) => {
      try {
        dbQueries.insertAlert(mongoConnection.getDb(), alert, function (alert) {
          if (alert) {
            resolve({ alert: alert });  
          }

          resolve({ response: 'Not found' });  
        });
      } catch(error) {
        reject({ response: `Error ${error}`});
      }
    });
  }
}

module.exports = Alert;
