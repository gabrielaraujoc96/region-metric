/**************************************************************
//
//  alerts.js
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
const router = require('koa-router')();
const Alert  = require('../controllers/alert');
const JsonSchemaValidator = require('jsonschema').Validator;
const alertSchema = require('../schemas/alert.json');

/* **************************************************************************************************
**
**  MARK: This class is responsible to create the routes to all endpoints related to alert confirmation
**
****************************************************************************************************/
router.get('/v1/alert/:alert_id', async (ctx) => {
  const { alert_id } = ctx.params;
 
  try {
    const controller = new Alert();
    const response = await controller.get(alert_id);

    ctx.status = 200;
    ctx.body = response;
  } catch (err) {
    console.log(err);
  }
});

router.get('/v1/alerts', async (ctx) => {
  try {
    const controller = new Alert();
    const response = await controller.getAll();

    ctx.status = 200;
    ctx.body = response;
  } catch (err) {
    console.log(err);
  }
});

router.post('/v1/alert', async (ctx) => {
  const schemaValidator = new JsonSchemaValidator();
  const httpBody = ctx.request.body;

  try {
    const validator = schemaValidator.validate(httpBody, alertSchema);

    if (!validator.valid) {
      // console.log(`${validator.errors[0].stack} on ${validator.schema.id}`);
      const response = { error: `Invalid payload: ${validator.errors[0].stack} on ${validator.schema.id}`};
      ctx.status = 400;
      ctx.body = response;

      return;
    }

    const controller = new Alert();
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