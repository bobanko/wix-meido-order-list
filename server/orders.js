const request = require("request");
const fs = require("fs");
const { sortBy } = require("lodash");

const { defaultHash, serverUrl } = require("../config.js");
const { mapMeidoToWorkers } = require("./mapping");
const ordersCacheFilePath = "./server/orders.json";

const logger = {
  log: (message) => (data) => {
    console.log(message);
    return data;
  },
  error: (message, result) => (error) => {
    console.warn(`${message}: ${error.message}`);
    if(result){
      return result;
    }else {
      return error;
    }
  }
};

function getDataFromFile(filepath) {
  const rawdata = fs.readFileSync(filepath);
  return Promise.resolve(rawdata);
}

function saveDataToFile(filepath, data) {
  fs.writeFileSync(filepath, data);
  return Promise.resolve(data);
}

function getOrdersFromServer(hash = defaultHash) {
  const url = `${serverUrl}${hash}`;

  console.log(`[server] request: ${url}`)

  return new Promise((resolve, reject) => {
    request(
      {
        url,
        json: true
      },
      (error, response, bodyObj) => {
        if (error) {
          reject(error);
        } else if (response.statusCode !== 200) {
          reject({ status: response.statusCode });
        } else {
          resolve(bodyObj);
        }
      }
    );
  });
}

function getOrdersFromCache() {
  if (!fs.existsSync(ordersCacheFilePath)) {
    return Promise.reject(new Error('no cached orders'));
  }

  return getDataFromFile(ordersCacheFilePath)
    .then(data => JSON.parse(data));
}

function cacheOrders(orders) {
  const rawData = JSON.stringify(orders);
  return saveDataToFile(ordersCacheFilePath, rawData)
    .then(() => orders);
}

module.exports = {
  getOrders: function (hash) {
    return Promise.resolve()
      //.then(getOrdersFromCache)
      //.then(logger.log('[cache] loaded'))
      //.catch(logger.error('[cache] error'))
      .then(() => getOrdersFromServer(hash || defaultHash))
      .then(logger.log('[server] responded'))
      //.then(cacheOrders)
      //.then(logger.log('[cache] saved'))
      .then(mapMeidoToWorkers)
      .then(workers => sortBy(workers, w => w.name.toLowerCase()))
      //.catch(logger.error('[server] error'));
  }
}