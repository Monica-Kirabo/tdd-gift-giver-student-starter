const express = require("express");

var giftroute = express.Router();

giftroute.route("/pairs").post((req, res) => {
  res.status(200).json({ names: [] });
});
giftroute.route("/traditional").post((req, res) => {
  res.status(200).json({ names: [] });
});

module.exports = giftroute;
