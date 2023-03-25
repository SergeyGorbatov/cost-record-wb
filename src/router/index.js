const Router = require("express").Router;
const router = new Router();
const {
  getCosts,
  getIncomes,
  createNewCost,
  createNewIncome,
  deleteIncomes,
  deleteCosts,
} = require("../controllers/controllers");
const {
  activate,
  login,
  logout,
  refresh,
  registration,
} = require("../controllers/user-controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  registration
);
router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);

router.get("/costs", authMiddleware, getCosts);
router.post("/costs", authMiddleware, createNewCost);
router.delete("/costs", authMiddleware, deleteCosts);

router.get("/incomes", authMiddleware, getIncomes);
router.post("/incomes", authMiddleware, createNewIncome);
router.delete("/incomes", authMiddleware, deleteIncomes);

module.exports = router;
