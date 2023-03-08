const Cost = require("../../models/cost");
const Income = require("../../models/income");

const getCosts = async (req, res) => {
  try {
    const allCosts = await Cost.find();

    res.status(200).send(allCosts);
  } catch (err) {
    res.status(400).send("Failed to get all costs");
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

const deleteCollections = async (req, res) => {
  try {
    await Cost.deleteMany({});
    await Income.deleteMany({});
    res.status(200).send("Clear");
  } catch (err) {
    res.status(400).send("Failed to create a cost");
  }
};

module.exports = {
  getCosts,
  getIncomes,
  createNewCost,
  createNewIncome,
  deleteCollections,
};
