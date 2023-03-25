const Cost = require("../models/cost");

class CostService {
  async getCosts() {
    const allCosts = await Cost.find();
    return allCosts;
  }
  
  async createNewCost(req) {
    const data = await req.body;
    const cost = new Cost(data);
    const result = await cost.save();
    return result;
  }

  async deleteCosts() {
    const result = await Cost.deleteMany({});
    return result;
  }
}

module.exports = new CostService();