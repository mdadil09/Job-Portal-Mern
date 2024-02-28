const express = require("express");
const {
  getAllJobs,
  getSingleJobs,
  searchJobs,
} = require("../controllers/jobs");
const { commonRole, isUser } = require("../middlewares/userType");
const protect = require("../middlewares/auth");
const {
  appliedJobs,
  getAppliedJobs,
  deleteAppliedJob,
} = require("../controllers/userInfo");

const router = express.Router();

router.get("/", getAllJobs);
router.get("/applied", protect, isUser, getAppliedJobs);
router.get("/:id", protect, commonRole, getSingleJobs);
router.get("/search/:key", protect, commonRole, searchJobs);
router.post("/jobapplied", protect, isUser, appliedJobs);
router.delete("/delete/:id", protect, isUser, deleteAppliedJob);

module.exports = router;
