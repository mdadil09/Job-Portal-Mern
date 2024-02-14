const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    type: { type: String },
    url: { type: String },
    created_at: { type: String },
    company: { type: String },
    company_url: { type: String },
    location: { type: String },
    title: { type: String },
    description: { type: String },
    how_to_apply: { type: String },
    company_logo: { type: String },
  },
  { timestamps: true }
);

const JobsData = mongoose.model("JobsData", jobsSchema);

module.exports = JobsData;
