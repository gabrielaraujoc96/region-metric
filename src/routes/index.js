/**************************************************************
//
//  index.js
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
const alerts = require('../routes/alerts.js');
const alertConfirmation = require('../routes/alertConfirmation');
const router = require('koa-router')();

/* **************************************************************************************************
**
**  MARK: This is a base class to declare all available routes to our main App application
**
****************************************************************************************************/
router.use(alerts.routes());
router.use(alertConfirmation.routes());

module.exports = router;
