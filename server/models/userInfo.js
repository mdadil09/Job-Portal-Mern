const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  profilePic: { type: String, required: true },
  linkedLink: { type: String },
  gitLink: { type: String },
  address: { type: String },
  resume: { type: String, required: true },
  branchName: { type: String, required: true },
  courseName: { type: String, required: true },
  highSchool: { type: String },
  secondarySchool: { type: String },
  college: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  projectName: { type: String },
  projectDesc: { type: String },
  projectType: { type: String },
  projectLink: { type: String },
  jobType: { type: String, required: true },
  companyName: { type: String, required: true },
  jobRole: { type: String, required: true },
  jobStartDate: { type: String, required: true },
  jobEndDate: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;
