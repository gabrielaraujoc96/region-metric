/**************************************************************
//
//  MetabaseConnector.js
//  Region Metric
//
//  Created by Gabriel Araujo on 21/01/2022.
//
**************************************************************/

/* **************************************************************************************************
**
**  MARK: Variables declaration
**
****************************************************************************************************/
const { default: axios } = require("axios");
const HttpConnector = require("../connectors/http/httpConnector");

const _url = "metabase://localhost:3000/api/";
const _httpClient = new HttpConnector(_url, 5000).getProvider();
var authToken = "";


/* **************************************************************************************************
**
**  MARK: This class is responsible to do all the Metabase connection and it's creation, and also
**  contains the setup metabase parts that will create the connection with the Database and all
**  the setup fields.
**
****************************************************************************************************/
class MetabaseConnector {
  setAuthToken(token) {
    authToken = token;
  }

  async getAuthToken(callback) {
    try {
      const url = "session";
      const headers = this._getAPIHeaders();
      const body = {
        username: "region@metric.com",
        password: "123456",
      };

      const { data } = await _httpClient.post(url, body, headers);
      return callback(data.id);
    } catch (err) {
      return callback(null);
    }
  }

  async setupMetabase(callback) {
    return await this._executeHTTPRequest(async () => {
      const url = "setup/";
      const headers = this._getAPIHeaders();
      const setupToken = await this._getSetupToken();

      const body = {
        token: setupToken,
        database: {
          engine: "mongo",
          is_full_sync: true,
          name: "Region Metric",
          schedules: null,
          details: {
            dbname: "mongo",
            host: "mongo",
            port: 27017,
            pass: null,
            ssl: false,
            user: null,
            "use-connection-uri": false,
            "use-srv": false,
            authdb: null,
          },
        },
        user: {
          email: "region@metric.com",
          first_name: "Region Metric",
          last_name: "Metric",
          password: "123456",
          site_name: "Region Metric",
        },
        prefs: {
          site_name: "Region Metric",
          site_locale: "en",
          allow_tracking: false,
        },
      };

      const { data } = await _httpClient.post(url, body, headers);
      authToken = data.id;

      return callback(authToken);
    });
  }

  async createCard(question = "", token) {
    return await this._executeHTTPRequest(async () => {
      //This post request need to be done in old axios way. There is a problem
      //doing with the new one when sending large data.
      var axiosOptions = {
        method: "POST",
        url: "http://localhost:3000/api/card",
        headers: {
          "Content-Type": "application/json",
          "X-Metabase-Session": token,
        },
        data: question,
      };

      axios(axiosOptions).then((response) => {
        return;
      });
    });
  }

  async _getSetupToken() {
    return await this._executeHTTPRequest(async () => {
      const url = "session/properties";
      const headers = this._getAPIHeaders();

      const setupToken = await _httpClient.get(url, headers);
      return setupToken.data["setup-token"];
    });
  }

  _getAPIHeaders() {
    return {
      headers: {
        "Content-Type": "application/json",
        "X-Metabase-Session": authToken,
      },
    };
  }

  async _executeHTTPRequest(operation) {
    try {
      return await operation();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = MetabaseConnector;
