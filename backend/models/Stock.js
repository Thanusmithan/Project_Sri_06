const mongoose = require('mongoose');
//Stock.js
// Define the stock schema
const stockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  incoming: { type: Number, default: 0 },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  value: { type: Number, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

// Create the stock model
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
