/**************************************************************
//
//  setupMetabase.js
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
const MetabaseConnector = require("../connectors/MetabaseConnector.js");
// const DefaultQueries = require("../queries/defaultQueries");

const connection = new MetabaseConnector();

const sleep = (waitTimeInMs) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

  /* **************************************************************************************************
**
**  MARK: This script is responsible to give a fast and automated installation of the locally metabase
**
****************************************************************************************************/
connection.getAuthToken(function (authToken) {
  //User already setup metabase
  if (authToken) {
    connection.setAuthToken(authToken);
    _createCards(authToken);
  }

  //Metabase not set up
  else {
    console.log(
      "Setting up metabase, please wait, this may take a few seconds"
    );
    connection.setupMetabase(function (authToken) {
      connection.setAuthToken(authToken);
      //This is necessary to make sure that metabase connects to Mongo before we try to create the cards.
      //Since we don't have a callback method from metabase, this is the only way of making sure it works.
      sleep(20000).then(() => {
        console.log("Setup finish. Access Metabase via localhost:3000");
        console.log(
          "To authenticate, use email: region@metric.com, password: 123456"
        );
        console.log("Have fun (:");
      });
    });
  }
});

/************** 
 * Commented function that is not being used yet. 
 * */ 
// function _createCards(token) {
//   console.log("Metabase setup completed. Creating cards.");
//   for (let card of DefaultQueries.defaultQueries()) {
//     connection.createCard(card, token);
//   }
//   console.log(
//     "Cards created. You can access then in the 'OUR ANALYTICS' space in the Metabase homepage."
//   );
//   console.log("Setup finish. Access Metabase via localhost:3000");
//   console.log(
//     "To authenticate, use email: region@metric.com, password: 123456"
//   );
//   console.log("Have fun (:");
//   return;
// }
