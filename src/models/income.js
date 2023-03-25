const mongoose = require('mongoose');

const { Schema } = mongoose;

const incomeSchema = new Schema({
  amount: Number,
  expenseItem: String,
  count: Number,
  date: String,
});

module.exports = Income = mongoose.model('Income', incomeSchema);

