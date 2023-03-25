const Income = require("../models/income");

class IncomeService {
  async getIncomes() {
    const allIncomes = await Income.find();
    return allIncomes;
  }
  
  async createNewIncome(req) {
    const data = await req.body;
    const income = new Income(data);
    const result = await income.save();
    return result;
  }

  async deleteIncomes() {
    const result = await Income.deleteMany({});
    return result;
  }
}

module.exports = new IncomeService();