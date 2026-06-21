const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
  product: String, // Product type (e.g., CNC, MIS, NRML)
  name: String, // Stock symbol/name
  qty: Number, // Quantity held
  avg: Number, // Average buy price
  price: Number, // Current market price
  net: String, // Net P&L percentage
  day: String, // Day's P&L percentage
  isLoss: Boolean, // True if position is in loss
});

module.exports = { PositionsSchema };
