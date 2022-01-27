/**************************************************************
//
//  httpConnector.js
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

const axios = require("axios");

/* **************************************************************************************************
**
**  MARK: This class is responsible to be the default interface to all Http Connections that are created
**
****************************************************************************************************/
class HttpConnector {
  constructor(baseURL, timeout, debug) {
    this.baseURL = baseURL;
    this.timeout = timeout;
    this.debug = debug;
  }

  getProvider() {
    const provider = this.createInstance();
    return provider;
  }

  createInstance() {
    return axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
    });
  }
}

module.exports = HttpConnector;
