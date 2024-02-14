const JobsData = require("../models/jobSchema");
const { nanoid } = require("nanoid");

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
    const id = req.params.id;
    const result = await JobsData.findOne({
      _id: id,
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
        { title: { $regex: searchKey, $options: "i" } },
        { type: { $regex: searchKey, $options: "i" } },
        { company: { $regex: searchKey, $options: "i" } },
        { location: { $regex: searchKey, $options: "i" } },
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
  try {
    const {
      type,
      url,
      created_at,
      company,
      company_url,
      location,
      title,
      description,
      how_to_apply,
      company_logo,
    } = req.body;

    const newJob = await JobsData.create({
      id: nanoid(32),
      type: type,
      url: url,
      created_at: created_at,
      company: company,
      company_url: company_url,
      location: location,
      title: title,
      description: description,
      how_to_apply: how_to_apply,
      company_logo: company_logo,
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
          description: req.body.description,
          created_at: req.body.created_at,
          location: req.body.location,
          how_to_apply: req.body.how_to_apply,
          title: req.body.title,
          url: req.body.url,
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
