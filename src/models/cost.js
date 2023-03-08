const mongoose = require('mongoose');

const { Schema } = mongoose;

const costScheme = new Schema({
  amount: Number,
  expenseItem: String,
  count: Number,
  date: String,
});

module.exports = Task = mongoose.model('Costs', costScheme);