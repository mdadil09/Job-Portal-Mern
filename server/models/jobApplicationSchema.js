const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    userInfo: { type: mongoose.Schema.Types.ObjectId, ref: "userinfo" },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "jobsdata" },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const JobApplication = mongoose.model("JobApplication", applicationSchema);

module.exports = JobApplication;
