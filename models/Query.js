const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuerySchema = Schema({
  standard: String,
  studentname: String,
  attendinglec: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Query = mongoose.model("queries", QuerySchema);
module.exports = Query;
