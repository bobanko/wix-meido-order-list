const express = require("express");
const { getOrders } = require("./orders");

const app = express();

console.log("[server] init...");

//host static site
app.use(express.static("public"));

//todo: make api calls, update orders daily, or on demand?
app.get("/orders", async (req, res) => {
  const { hash } = req.query;
  console.log(`[server] orders requested, ${hash}`);
  const result = await getOrders(hash);
  res.send(result);
});

app.listen(3000, () => {
  console.log("[server] started");
});
