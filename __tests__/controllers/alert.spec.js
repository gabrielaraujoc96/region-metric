/**************************************************************
//
//  alert.spec.js
//  Region Metric
//
//  Created by Gabriel Araujo on 20/12/2022.
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

const AlertController = require('../../src/controllers/alert');

jest.mock('../../src/queries/transactionQueries', () => ({
  getAlert: (database, id, callback) => callback({ alert: { id: 'abc-123'}}),
  getAlerts: (database, callback) => callback({ alerts: { id: 'abc-123'}}),
  insertAlert: (database, alert, callback) => callback({ alert: { id: 'abc-123'}})
}));

/* **************************************************************************************************
**
**  MARK: After this line there are a group of tests over the Alert Controllers covering multiple scenarios
**
****************************************************************************************************/

describe('AlertController', () => {
  describe('#get', () => {
    const subject = async (alertId) => {
      const controller = new AlertController();
      return controller.get(alertId)
    };

    describe('when alert exist', () => {
      const response = {"alert": {"alert": {"id": "abc-123"}}};

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

  describe('#getAll', () => {
    const subject = async () => {
      const controller = new AlertController();
      return controller.getAll()
    };

    describe('when alert exist', () => {
      const response = {"alerts": {"alerts": {"id": "abc-123"}}};

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
      const controller = new AlertController();
      return controller.post(alertId)
    };

    describe('when alert exist', () => {
      const response = {"alert": {"alert": {"id": "abc-123"}}};

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
