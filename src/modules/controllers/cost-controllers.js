const Cost = require("../../models/cost");

const getAllCosts = async (req, res) => {
  try {
    const allCosts = await Cost.find();
    
    res.status(200).send(allCosts);
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

module.exports = {
  getAllCosts,
  createNewCost,
};
