const mongoose = require('mongoose');

const { Schema } = mongoose;

const costSchema = new Schema({
  amount: Number,
  expenseItem: String,
  count: Number,
  date: String,
});

module.exports = Cost = mongoose.model('Costs', costSchema);

