const express = require("express");
const router = express.Router();

const {
  getAllCosts,
  createNewCost,
} = require("../controllers/cost-controllers");

router.get("/costs", getAllCosts);
router.post("/costs", createNewCost);

module.exports = router;