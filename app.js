const express = require("express");
const app = express();

const giftroute = require("./routes/gift-exchange");
//const giftex = require("./models/gift-exchange");
var morgan = require("morgan");
morgan("tiny");
app.use(express.json());
app.use(giftroute);
//app.use(giftex);
const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
app.get("/healthcheck", (req, res) => {
  res.status(200).send({ ping: "pong" });
});

module.exports = app;
