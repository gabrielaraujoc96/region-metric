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

const supertest = require('supertest');
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const nock = require('nock');
const alertConfirmationRoutes = require('../../src/routes/alertConfirmation');

const AlertConfirmationController = require('../../src/controllers/alertConfirmation');
jest.mock('../../src/controllers/alertConfirmation');


/* **************************************************************************************************
**
**  MARK: After this line there are a group of tests over the Alert Confirmation Routes covering multiple scenarios
**
****************************************************************************************************/

describe('Alert', () => {

  const app = new Koa();
  let server, request;

  const subject = (body) => {
    return request
      .post('/v1/alert_confirmation')
      .send(body)
  };

  const setupMockDependencies = (postResponse = () => {}) => {
    const alertMock = {
      post: () => postResponse()
    };

    AlertConfirmationController.mockImplementation(() => alertMock);
  };

  const alertConfirmationRequestWithValidParams = {
    alert_id: 'alert-id',
    received_zone: 'zona-sul',
    user_id: 'user-id',
  };

  beforeAll(() => {
    router.use(bodyParser());
    router.use(alertConfirmationRoutes.routes());
    app.use(router.routes());
    server = app.listen();
    request = supertest(server);
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  describe('POST /alert_confirmation', () => {

    describe('when send a request with invalid schema', () => {

      it('responds with http status with a bad request (400)', function() {
        return new Promise(function (resolve) {
          subject()
          .then(function(result) {
            expect(result.statusCode).toBe(400);
            resolve();
          });
        });
      });
    })

    describe('when send a request with valid params and it was processed with success', () => {

      const alertResponse = {
        alert: [
          {
            id: 'alert-id'
          }
        ]
      };

      it('responds with http status as created (201)', function() {
        setupMockDependencies(
          () => alertResponse
        );
        return new Promise(function (resolve) {
          subject(alertConfirmationRequestWithValidParams)
          .then(function(result) {
            expect(result.statusCode).toBe(201);
            resolve();
          });  
        });
      });
    });
  });
});