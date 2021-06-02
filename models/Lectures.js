const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const LectureSchema = new Schema({
  //10 subject timing
  marathi10: String,
  hindi10: String,
  english10: String,
  science10: String,
  maths10: String,
  history10: String,
  geography10: String,
  //12th commerce subject timing
  english12Com: String,
  hindi12Com: String,
  marathi12Com: String,
  maths12Com: String,
  healthAndPhysicalEducation12Com: String,
  IT12Com: String,
  secretarialPractice12Com: String,
  economics12Com: String,
  Bk12Com: String,
  OrganizationofCommercendManagement12Com: String,
  //12th science subject timing
  english12Sci: String,
  hindi12Sci: String,
  physics12Sci: String,
  chemistry12Sci: String,
  maths12Sci: String,
  economics12Sci: String,
  biology12Sci: String,
  IT12Sci: String,
  environmentalEducation12Sci: String,
  personalityDevelopment12Sci: String,
  lecdate: String,
  date: {
    type: Date,
    default: Date.now
  }
});

//create model for lectures
const Lecture = mongoose.model("lecture", LectureSchema);
//exporting module Lecture
module.exports = Lecture;
