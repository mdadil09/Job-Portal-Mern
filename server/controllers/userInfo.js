const JobApplication = require("../models/jobApplicationSchema");
const UserInfo = require("../models/userInfo");

const applyJob = async (req, res) => {
  try {
    const {
      name,
      mobile,
      profilePic,
      linkedLink,
      gitLink,
      address,
      resume,
      branchName,
      courseName,
      highSchool,
      secondarySchool,
      college,
      startDate,
      endDate,
      projectName,
      projectDesc,
      projectType,
      projectLink,
      jobType,
      companyName,
      jobRole,
      jobStartDate,
      jobEndDate,
    } = req.body;

    const newProfile = await UserInfo.create({
      name: name,
      mobile: mobile,
      profilePic: profilePic,
      linkedLink: linkedLink,
      gitLink: gitLink,
      address: address,
      resume: resume,
      branchName: branchName,
      courseName: courseName,
      highSchool: highSchool,
      secondarySchool: secondarySchool,
      college: college,
      startDate: startDate,
      endDate: endDate,
      projectName: projectName,
      projectDesc: projectDesc,
      projectType: projectType,
      projectLink: projectLink,
      jobType: jobType,
      companyName: companyName,
      jobRole: jobRole,
      jobStartDate: jobStartDate,
      jobEndDate: jobEndDate,
      createdBy: req.user.id,
    });

    res.status(200).send(newProfile);
  } catch (error) {
    console.log(error.message);
  }
};

const appliedJobs = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const jobId = req.params.jobId;
    const userInfo = await UserInfo.findOne({ createdBy: userId });

    if (!userInfo) {
      return res
        .status(404)
        .json({ success: false, error: "User info not found" });
    }

    const newJobApplication = await JobApplication.create({
      userId: userId,
      userInfo: userInfo._id,
      jobId: jobId,
      createdBy: userId,
    });

    res.status(200).send(newJobApplication);
  } catch (error) {
    console.log(error.message);
  }
};

const getAppliedJobs = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  applyJob,
  appliedJobs,
};
