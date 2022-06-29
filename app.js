const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const router = require("./routes/gift-exchange");
//const giftex = require("./models/gift-exchange");
var morgan = require("morgan");
const { NotFoundError } = require("./routes/utils/errors");
app.use(morgan("tiny"));
app.use(express.json());
app.use(router);
app.use("/gift-exchange", router);
//app.use(giftex);
//const port = 3000;
//app.listen(port, () => {
//console.log(`🚀 Server listening at http://localhost:${port}`);
//});
app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong";
  const error = { status, message };

  return res.status(status).json({ error: { message, status } });
});
module.exports = app;
