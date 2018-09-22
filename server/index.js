const express = require("express");
const { getOrdersFromServer, getOrdersFromCache } = require("./orders");

const port = process.env.PORT || 3000;
const app = express();

console.log("[server] init...");

//host static site
app.use(express.static("dist"));

//todo: make api calls, update orders daily, or on demand?
app.get("/orders", async (req, res) => {
  const { hash, cache } = req.query;
  console.log("[server] orders requested: ", req.query);

  if (cache) {
    const cachePath = `./cache/${cache}.json`;
    res.send(await getOrdersFromCache(cachePath));
  } else {
    res.send(await getOrdersFromServer(hash));
  }
});

app.listen(port, () => {
  console.log("[server] started");
});
