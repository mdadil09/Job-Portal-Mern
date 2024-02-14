const express = require("express");
const {
  getAllJobs,
  getSingleJobs,
  searchJobs,
} = require("../controllers/jobs");
const { commonRole, isUser } = require("../middlewares/userType");
const protect = require("../middlewares/auth");
const { appliedJobs } = require("../controllers/userInfo");

const router = express.Router();

router.get("/", protect, commonRole, getAllJobs);
router.get("/:id", protect, commonRole, getSingleJobs);
router.get("/search/:key", protect, commonRole, searchJobs);
router.post("/applyjob/:jobId", protect, isUser, appliedJobs);

module.exports = router;
