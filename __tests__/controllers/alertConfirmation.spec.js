/**************************************************************
//
//  alertConfirmation.spec.js
//  Region Metric
//
//  Created by Gabriel Araujo on 26/01/2022.
//
**************************************************************/

/* eslint-disable global-require */
// eslint-disable-next-line no-unused-vars
/* global describe, test, expect, it, jest, beforeEach */

/* **************************************************************************************************
**
**  MARK: Variables declaration
**
****************************************************************************************************/
const AlertConfirmationController = require('../../src/controllers/alertConfirmation');

jest.mock('../../src/queries/transactionQueries', () => ({
  getAlertConfirmations: (database, id, callback) => callback({ alertConfirmation: { id: 'abc-123'}}),
  getAllAlertsConfirmation: (database, callback) => callback({ alertConfirmation: { id: 'abc-123'}}),
  insertAlertConfirmation: (database, alertConfirmation, callback) => callback({ alertConfirmation: { id: 'abc-123'}})
}));

/* **************************************************************************************************
**
**  MARK: After this line there are a group of tests over the Alert Confirmation Controllers 
**  covering multiple scenarios
**
****************************************************************************************************/

describe('AlertConfirmationController', () => {
  describe('#get', () => {
    const subject = async (alertId) => {
      const controller = new AlertConfirmationController();
      return controller.get(alertId)
    };

    describe('when alert exist', () => {
      const response = {"alertConfirmations": {"alertConfirmation": {"id": "abc-123"}}};

      test('return alert', function() {
        return new Promise(function (resolve) {
          subject('abc-123')
          .then(function(result) {
            expect(JSON.stringify(result)).toBe(JSON.stringify(response));
            resolve();
          });
        });
      });
    });
  });

  describe('#getAllAlertsConfirmation', () => {
    const subject = async () => {
      const controller = new AlertConfirmationController();
      return controller.getAllAlertsConfirmation()
    };

    describe('when alerts exist', () => {
      const response = {"alerts": {"alertConfirmation": {"id": "abc-123"}}};

      test('return alert', function() {
        return new Promise(function (resolve) {
          subject('abc-123')
          .then(function(result) {
            expect(JSON.stringify(result)).toBe(JSON.stringify(response));
            resolve();
          });
        });
      });
    });
  });

  describe('#post', () => {
    const subject = async (alertId) => {
      const controller = new AlertConfirmationController();
      return controller.post(alertId)
    };

    describe('when alert is valid', () => {
      const response = {"alertConfirmation": {"alertConfirmation": {"id": "abc-123"}}};

      test('return alert', function() {
        return new Promise(function (resolve) {
          subject('abc-123')
          .then(function(result) {
            expect(JSON.stringify(result)).toBe(JSON.stringify(response));
            resolve();
          });
        });
      });
    });
  });
});
