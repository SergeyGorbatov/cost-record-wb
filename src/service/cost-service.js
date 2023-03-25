const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
const Cost = require("../models/cost");

class CostService {
  async getCosts() {
    const allCosts = await Cost.find();
    return allCosts;
  }
}

module.exports = new CostService();