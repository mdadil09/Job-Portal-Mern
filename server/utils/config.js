const dateAndTime = require("date-and-time");

function formatDate(date) {
  return dateAndTime.format(date, "YYYY/MM/DD HH:mm:ss");
}

module.exports = formatDate;
