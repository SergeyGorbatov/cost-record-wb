const costService = require("../service/cost-service");
const incomeService = require("../service/income-service");

const getCosts = async (req, res, next) => {
  try {
    const allCosts = await costService.getCosts();
    return res.json(allCosts);
  } catch (error) {
    next(error);
  }
};

const createNewCost = async (req, res) => {
  try {
    const newCost = await costService.createNewCost(req);
    return res.json(newCost);
  } catch (error) {
    next(error);
  }
};

const deleteCosts = async (req, res) => {
  try {
    const deleteCosts = await costService.deleteCosts();
    return res.json(deleteCosts);
  } catch (err) {
    next(error);
  }
};

const getIncomes = async (req, res) => {
  try {
    const allIncomes = await incomeService.getIncomes();
    return res.json(allIncomes);
  } catch (error) {
    next(error);
  }
};

const createNewIncome = async (req, res) => {
  try {
    const newIncome = await incomeService.createNewIncome(req);
    return res.json(newIncome);
  } catch (error) {
    next(error);
  }
};

const deleteIncomes = async (req, res) => {
  try {
    const deleteIncomes = await incomeService.deleteIncomes();
    return res.json(deleteIncomes);
  } catch (err) {
    next(error);
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
