const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const giftroute = require("./routes/gift-exchange");
//const giftex = require("./models/gift-exchange");
var morgan = require("morgan");
const { NotFoundError } = require("./routes/utils/errors");
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

app.use((req, res, next) => {
 return next(new NotFoundError);
});

app.use((err, reg, res, next) => {
  const status = err?.status || 500;
  const message = err?.message || "something went wrong";
  const error = { status, message };
  res.status(status).send(error);
});
module.exports = app;
