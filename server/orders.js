const request = require("request");
const fs = require("fs");

const { defaultHash, serverUrl } = require("../config.js");
const { mapMeidoToWorkers } = require("./mapping");

const logger = {
  log: message => data => {
    console.log(message);
    return data;
  },
  error: (message, result) => error => {
    console.warn(`${message}: ${error.message}`);
    if (result) {
      return result;
    } else {
      return error;
    }
  }
};

function getDataFromFile(filepath) {
  if (!fs.existsSync(filepath)) {
    return Promise.reject(new Error(`path not exist: '${filepath}'`));
  }
  const rawdata = fs.readFileSync(filepath);
  return Promise.resolve(rawdata);
}

function saveDataToFile(filepath, data) {
  fs.writeFileSync(filepath, data);
  return Promise.resolve(data);
}

function getDataFromServer(url) {
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

function cacheOrders(orders) {
  const rawData = JSON.stringify(orders);
  return saveDataToFile(path, rawData).then(() => orders);
}

module.exports = {
  getOrdersFromServer(hash = defaultHash) {
    const url = `${serverUrl}${hash}`;

    return (
      Promise.resolve()
        .then(logger.log(`[server] request '${url}'`))
        .then(() => getDataFromServer(url))
        .then(logger.log("[server] responded"))
        //.then(cacheOrders)
        //.then(logger.log("[cache] saved"))
        .then(mapMeidoToWorkers)
        .catch(error => console.log(error))
    );
  },
  getOrdersFromCache(filepath) {
    return Promise.resolve()
      .then(logger.log(`[cache] request '${filepath}'`))
      .then(() => getDataFromFile(filepath))
      .then(logger.log(`[cache] received`))
      .then(data => JSON.parse(data))
      .then(mapMeidoToWorkers)
      .catch(error => console.log(error));
  }
};
