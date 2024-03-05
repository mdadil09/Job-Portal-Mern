const JobsData = require("../models/jobSchema");
const { customAlphabet } = require("nanoid");

const formatDate = require("../utils/config");

const getAllJobs = async (req, res) => {
  try {
    const result = await JobsData.find();

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      error: error.message,
      message: "Something Went Wrong",
    });
    console.log(error.message);
  }
};

const getSingleJobs = async (req, res) => {
  try {
    const jobId = req.params.id;
    const result = await JobsData.findOne({
      _id: jobId,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      error: error.message,
      message: "Id is Wrong",
    });
    console.log(error.message);
  }
};

const searchJobs = async (req, res) => {
  try {
    const searchKey = req.params.key;
    const result = await JobsData.find({
      $or: [
        { jobTitleitle: { $regex: searchKey, $options: "i" } },
        { jobType: { $regex: searchKey, $options: "i" } },
        { jobIndustry: { $regex: searchKey, $options: "i" } },
        { jobGeo: { $regex: searchKey, $options: "i" } },
        { jobLevel: { $regex: searchKey, $options: "i" } },
        { companyName: { $regex: searchKey, $options: "i" } },
      ],
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      error: error.message,
      message: "Job doesn't exist",
    });
    console.log(error.message);
  }
};

const addJob = async (req, res) => {
  const nanoid = customAlphabet("1234567890", 6);
  try {
    const {
      url,
      jobSlug,
      jobTitle,
      companyName,
      jobIndustry,
      jobType,
      jobGeo,
      jobLevel,
      jobExcerpt,
      jobDescription,
      annualSalaryMin,
      annualSalaryMax,
      salaryCurrency,
    } = req.body;

    const companyLogo = req.file.filename;

    const now = new Date();
    const formattedDate = formatDate(now);

    console.log(formattedDate);

    const newJob = await JobsData.create({
      id: nanoid(),
      url: url,
      jobSlug: jobSlug,
      jobTitle: jobTitle,
      companyName: companyName,
      companyLogo: companyLogo,
      jobIndustry: jobIndustry,
      jobType: jobType,
      jobGeo: jobGeo,
      jobLevel: jobLevel,
      jobExcerpt: jobExcerpt,
      jobDescription: jobDescription,
      pubDate: formattedDate,
      annualSalaryMin: annualSalaryMin,
      annualSalaryMax: annualSalaryMax,
      salaryCurrency: salaryCurrency,
      createdBy: req.user.id,
    });

    res.status(200).send(newJob);
  } catch (error) {
    console.log(error.message);
  }
};

const updateJob = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await JobsData.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          jobDescription: req.body.jobDescription,
          jobGeo: req.body.jobGeo,
          jobLevel: req.body.jobLevel,
          jobTitle: req.body.jobTitle,
          url: req.body.url,
          annualSalaryMin: req.body.annualSalaryMin,
          annualSalaryMax: req.body.annualSalaryMax,
        },
      },
      { new: true }
    );

    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await JobsData.deleteOne({
      _id: id,
    });

    res.status(200).send("Job Deleted Successfully!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getSingleJobs,
  getAllJobs,
  searchJobs,
  addJob,
  updateJob,
  deleteJob,
};
