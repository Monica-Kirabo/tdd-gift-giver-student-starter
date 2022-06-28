const express = require("express");
const GiftExchange = require("../models/gift-exchange");

var giftroute = express.Router();

giftroute.post("/gift-exchange/pairs", (req, res) => {
  const names = req.body?.name;

  res.status(400).json(GiftExchange.pairs.names);
});
giftroute.post("/gift-exchange/traditional", (req, res) => {
  const names = req.body?.names;

  res.status(400).send(GiftExchange.traditional.names);
});

module.exports = giftroute;
