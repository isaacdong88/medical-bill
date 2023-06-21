const express = require("express");
const router = express.Router();
const {
  loginUser,
  createUser,
  deleteUser,
  userBills,
} = require("../controllers/UserController");

const { protect } = require("..//middleware/authMiddleware");

router.post("/login", loginUser);
router.post("/", createUser);
router.get("/bills/:id", userBills);
router.delete("/:id", protect, deleteUser);

module.exports = router;
