/**************************************************************
//
//  alertConfirmation.js
//  Region Metric
//
//  Created by Gabriel Araujo on 23/01/2022.
//
**************************************************************/

/* **************************************************************************************************
**
**  MARK: Variables declaration
**
****************************************************************************************************/
const router = require('koa-router')();
const AlertConfirmation  = require('../controllers/alertConfirmation');
const JsonSchemaValidator = require('jsonschema').Validator;
const alertConfirmationSchema = require('../schemas/alertConfirmation.json');

/* **************************************************************************************************
**
**  MARK: This class is responsible to create the routes to all endpoints related to alert confirmation
**
****************************************************************************************************/
router.get('/v1/alert_confirmation/:alert_id', async (ctx) => {
  const { alert_id } = ctx.params;
 
  try {
    const controller = new AlertConfirmation();
    const response = await controller.get(alert_id);

    ctx.status = 200;
    ctx.body = response;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = { response: 'Something went wrong, we are sorry'};
  }
});

router.get('/v1/alert_confirmations', async (ctx) => {
  try {
    const controller = new AlertConfirmation();
    const response = await controller.getAllAlertsConfirmation();

    ctx.status = 200;
    ctx.body = response;
  } catch (err) {
    console.log(err);
  }
});

router.post('/v1/alert_confirmation', async (ctx) => {
  const schemaValidator = new JsonSchemaValidator();
  const httpBody = ctx.request.body;

  try {
    const validator = schemaValidator.validate(httpBody, alertConfirmationSchema);

    if (!validator.valid) {
      // console.log(`${validator.errors[0].stack} on ${validator.schema.id}`);
      const response = { error: `Invalid payload: ${validator.errors[0].stack} on ${validator.schema.id}`};
      ctx.status = 400;
      ctx.body = response;

      return;
    }
    const controller = new AlertConfirmation();
    const response = await controller.post(httpBody);

    ctx.status = 201;
    ctx.body = response;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: "Error" };
    console.log(err)
  }
});

module.exports = router;