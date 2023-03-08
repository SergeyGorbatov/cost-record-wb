const express = require("express");
const router = express.Router();

const {
  getCosts,
  getIncomes,
  createNewCost,
  createNewIncome,
  deleteIncomes,
  deleteCosts
} = require("../controllers/controllers");

router.get("/costs", getCosts);
router.post("/costs", createNewCost);
router.delete("/costs", deleteCosts);

router.get("/incomes", getIncomes);
router.post("/incomes", createNewIncome);
router.delete("/incomes", deleteIncomes);

module.exports = router;