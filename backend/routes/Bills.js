const express = require("express");
const router = express.Router();
const {
  fetchBills,
  createBills,
  deleteBills,
} = require("../controllers/BillsController");

const { protect } = require("../middleware/authMiddleware");

// router.get("/", controller.get);
router.get("/", protect, fetchBills);
router.post("/", protect, createBills);
router.delete("/:id", protect, deleteBills);

module.exports = router;
