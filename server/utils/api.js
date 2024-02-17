const axios = require("axios");
const JobsData = require("../models/jobSchema");

const options = {
  method: "GET",
  url: "https://jobicy.p.rapidapi.com/api/v2/remote-jobs",
  headers: {
    "X-RapidAPI-Key": "b9d944238cmsh5aeefb5718594d2p135aa0jsnc62b437484fb",
    "X-RapidAPI-Host": "jobicy.p.rapidapi.com",
  },
};

async function fetchapi() {
  try {
    const response = await axios.request(options);
    const result = await JobsData.insertMany(response.data.jobs);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

module.exports = fetchapi;
