/**************************************************************
//
//  transactionQueries.js
//  Region Metric
//
//  Created by Gabriel Araujo on 20/12/2022.
//
**************************************************************/


module.exports = {
  deleteAll: function (database, callback) {
    database.collection("messages").deleteMany({}, function (err, res) {
      if (err) throw err;

      console.log("Database cleaned. Deleted: " + res.deletedCount) +
        "documents.";
      return callback();
    });
  },

  insertAlert: function (database, alert, callback) {
    database.collection("alerts").insertOne(alert, function (err, res) {
      if (err) throw err;
      return callback(res)
    });
  },

  getAlert: function (database, id, callback) {
    database
      .collection("alerts")
      .findOne(
        { id: id },        
        function (err, docs) {
          if (err) throw err;

          return callback(docs);
        }
      );
  },

  getAlerts: function (database, callback) {
    database
      .collection("alerts")
      .find({}).toArray(function (err, docs) {
        if (err) throw err;

        return callback(docs);
      }
    )   
  },

  getAlertConfirmations: function (database, alert_id, callback) {
    database
      .collection("alertConfirmation")
      .find(
        { alert_id: alert_id })
      .toArray(function (err, docs) {
          if (err) throw err;

          return callback(docs);
        }
      );
  },

  getAllAlertsConfirmation: function (database, callback) {
    database
      .collection("alertConfirmation")
      .find({}).toArray(function (err, docs) {
        if (err) throw err;

        return callback(docs);
      }
    )   
  },

  insertAlertConfirmation: function (database, alertConfirmation, callback) {
    database.collection("alertConfirmation").insertOne(alertConfirmation, function (err, res) {
      if (err) throw err;

      return callback(res);
    });
  },
};
