const request = require("request");
const fs = require("fs");

const { serverUrl } = require("../config.js");
const { mapMeidoToWorkers } = require("./mapping");

function getMeidoError(message) {
  return [
    {
      name: "[meido] server error",
      order: {
        title: message,
        contractor: "meido"
      }
    }
  ];
}

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
          reject(getMeidoError(error));
        } else if (response.statusCode !== 200) {
          const { message } = bodyObj;
          reject(getMeidoError(message));
        } else {
          resolve(bodyObj);
        }
      }
    );
  });
}

function getCachePath(hash) {
  const [date] = new Date().toISOString().split("T");
  //todo: add current date
  const cachePath = `./cache/${hash}.${date}.json`; //

  return cachePath;
}

function cacheOrders(hash, orders) {
  const rawData = JSON.stringify(orders);
  return saveDataToFile(getCachePath(hash), rawData)
    .then(data => {
      console.log(`🗄[cache] saved '${hash}':[${orders.length}]`);
      return data;
    })
    .then(() => orders);
}

async function getOrdersFromServer(hash) {
  const url = `${serverUrl}${hash}`;

  console.log(`💩[meido] request: '${url}'`);

  const response = await getDataFromServer(url)
    .then(rawData => {
      if (Array.isArray(rawData)) return rawData;
      return JSON.parse(rawData);
    })
    .then(objData => {
      if (Array.isArray(objData)) return objData;

      throw objData;
    })
    .then(data => {
      console.log(`💩[meido] responded [${data.length}]`);
      return data;
    })
    .then(orders => cacheOrders(hash, orders))
    .then(mapMeidoToWorkers)
    .catch(error => {
      console.log("💩[meido] error ⛔️");
      return error;
    });

  return response;
}

async function getOrdersFromCache(hash) {
  console.log(`🗄[cache] request: '${hash}'`);

  const response = await getDataFromFile(getCachePath(hash))
    .then(data => JSON.parse(data))
    .then(mapMeidoToWorkers)
    .then(data => {
      console.log(`🗄[cache] responded [${data.length}] ✅`);
      return data;
    })
    .catch(error => {
      console.log("🗄[cache] missing ❎");
      return null;
    });

  return response;
}

async function getOrders(hash) {
  const cachedOrders = await getOrdersFromCache(hash);
  if (cachedOrders) return cachedOrders;
  // cache is empty

  return await getOrdersFromServer(hash);
}

module.exports = {
  getOrders
};
