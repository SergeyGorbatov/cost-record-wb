const express = require("express");
const router = express.Router();

const {
  getCosts,
  getIncomes,
  createNewCost,
  createNewIncome,
  deleteCollections,
} = require("../controllers/controllers");

router.get("/costs", getCosts);
router.get("/incomes", getIncomes);
router.post("/costs", createNewCost);
router.post("/income", createNewIncome);
router.delete("/delete", deleteCollections);

module.exports = router;