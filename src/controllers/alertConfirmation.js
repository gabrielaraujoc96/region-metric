/**************************************************************
//
//  alertConfirmation.js
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
**  MARK: This class is responsible to do all the business logical withing the Alert Confirmation, like getting
**  an alert confirmation, creating and listing all alerts confirmations.
**
****************************************************************************************************/
class AlertConfirmation {
  async get(alertId) {
    return new Promise((resolve, reject) => {
      try {
        dbQueries.getAlertConfirmations(mongoConnection.getDb(), alertId, function (alertConfirmations) {
          if (alertConfirmations) {
            resolve({ alertConfirmations });  
          }

          resolve({ response: 'Not found' });  
        });
      } catch(error) {
        reject({ response: `Error ${error}`});
      }
    });
  }

  async getAllAlertsConfirmation() {
    return new Promise((resolve, reject) => {
      try {
        dbQueries.getAllAlertsConfirmation(mongoConnection.getDb(), function (alertConfirmations) {
          if (alertConfirmations) {
            //For each em cada alert e mostrar por ai
            resolve({ alerts: alertConfirmations });  
          }

          resolve({ response: 'Not found' });  
        });
      } catch(error) {
        reject({ response: `Error ${error}`});
      }
    });
  }

  async post(alertConfirmation) {
    return new Promise((resolve, reject) => {
      try {
        dbQueries.insertAlertConfirmation(mongoConnection.getDb(), alertConfirmation, function (alertConfirmation) {
          if (alertConfirmation) {
            resolve({ alertConfirmation: alertConfirmation });

            return;
          }
          resolve({ response: 'Not found' });  
        });
      } catch(error) {
        reject({ response: `Error ${error}`});
      }
    });
  }
}

module.exports = AlertConfirmation;
