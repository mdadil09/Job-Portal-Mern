const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    url: String,
    jobSlug: String,
    jobTitle: String,
    companyName: String,
    companyLogo: String,
    jobIndustry: [String],
    jobType: [String],
    jobGeo: String,
    jobLevel: String,
    jobExcerpt: String,
    jobDescription: String,
    pubDate: String,
    annualSalaryMin: { type: String, default: "" },
    annualSalaryMax: { type: String, default: "" },
    salaryCurrency: String,
  },
  { timestamps: true }
);

const JobsData = mongoose.model("JobsData", jobsSchema);

module.exports = JobsData;
