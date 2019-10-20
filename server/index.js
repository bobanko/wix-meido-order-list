const express = require("express");

const { zip } = require("zip-a-folder");

const { version } = require("../package.json");
const { getOrders } = require("./orders");
const { defaultHash } = require("../config.js");

const port = process.env.PORT || 3000;
const app = express();

console.log("🥗[dashboard] init...");

//host static site
app.use(express.static("dist"));

app.get("/api/orders", async (req, res) => {
  const { hash = defaultHash } = req.query;
  console.log(`🥗[dashboard] request: '${hash}'`);

  res.set("version", version);

  res.send(await getOrders(hash));
});

app.get("/api/cache-zip", (req, res) => {
  const cacheFileName = `./cache.zip`;
  console.log(`[cache] zipping...`);
  zip("./cache", cacheFileName).then(() => {
    console.log(`[cache] zipped to ${cacheFileName}`);

    res.download(cacheFileName);
  });
});

app.listen(port, () => {
  console.log("🥗[dashboard] started");
});
