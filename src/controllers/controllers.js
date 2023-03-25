const Cost = require("../models/cost");
const Income = require("../models/income");
const costService = require("../service/cost-service");

const getCosts = async (req, res, next) => {
  try {
    const allCosts = await costService.getCosts();
    return res.json(allCosts);
  } catch (error) {
    next(error);
  }
};

const getIncomes = async (req, res) => {
  try {
    const allIncomes = await Income.find();
    res.status(200).send(allIncomes);
  } catch (err) {
    res.status(400).send("Failed to get all costs");
  }
};

const createNewCost = async (req, res) => {
  try {
    const data = await req.body;
    const cost = new Cost(data);
    const result = await cost.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send("Failed to create a cost");
  }
};

const createNewIncome = async (req, res) => {
  try {
    const data = await req.body;
    const income = new Income(data);
    const result = await income.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send("Failed to create a cost");
  }
};

const deleteCosts = async (req, res) => {
  try {
    const result = await Cost.deleteMany({});
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send("Failed to create a cost");
  }
};

const deleteIncomes = async (req, res) => {
  try {
    const result = await Income.deleteMany({});
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send("Failed to create a cost");
  }
};

module.exports = {
  getCosts,
  getIncomes,
  createNewCost,
  createNewIncome,
  deleteCosts,
  deleteIncomes,
};
