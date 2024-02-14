const express = require("express");
const { addJob, updateJob, deleteJob } = require("../controllers/jobs");
const protect = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/userType");

const router = express.Router();

router.post("/add", protect, isAdmin, addJob);
router.patch("/update/:id", protect, isAdmin, updateJob);
router.delete("/delete/:id", protect, isAdmin, deleteJob);

module.exports = router;
