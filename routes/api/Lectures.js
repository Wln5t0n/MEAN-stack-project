const express = require("express");
const router = express.Router();
const Lectures = require("../../models/Lectures");

//create api for posting all the lectures timing
router.post("/lectures", (req, res) => {
  //disturcting all value from req.body
  const {
    marathi10,
    hindi10,
    english10,
    science10,
    maths10,
    history10,
    geography10,
    english12Com,
    hindi12Com,
    marathi12Com,
    maths12Com,
    healthAndPhysicalEducation12Com,
    IT12Com,
    secretarialPractice12Com,
    economics12Com,
    Bk12Com,
    OrganizationofCommercendManagement12Com,
    english12Sci,
    hindi12Sci,
    physics12Sci,
    chemistry12Sci,
    maths12Sci,
    economics12Sci,
    biology12Sci,
    IT12Sci,
    environmentalEducation12Sci,
    personalityDevelopment12Sci,
    lecdate,
  } = req.body;

  //adding all the timing to the database
  const lecturesTiming = new Lectures({
    marathi10,
    hindi10,
    english10,
    science10,
    maths10,
    history10,
    geography10,
    english12Com,
    hindi12Com,
    marathi12Com,
    maths12Com,
    healthAndPhysicalEducation12Com,
    IT12Com,
    secretarialPractice12Com,
    economics12Com,
    Bk12Com,
    OrganizationofCommercendManagement12Com,
    english12Sci,
    hindi12Sci,
    physics12Sci,
    chemistry12Sci,
    maths12Sci,
    economics12Sci,
    biology12Sci,
    IT12Sci,
    environmentalEducation12Sci,
    personalityDevelopment12Sci,
    lecdate,
  });

  lecturesTiming
    .save()
    .then((item) => {
      res.send("Time Uploaded");
    })
    .catch((err) => {
      res.status(400).send("unable to save in Database");
    });
});

router.post("/lectures/update", (req, res) => {
  const id = "5e5e83b6d22e84197cc16b77";
  let lecTiming = {};
  lecTiming.marathi10 = req.body.marathi10;
  lecTiming.hindi10 = req.body.hindi10;
  lecTiming.english10 = req.body.english10;
  lecTiming.science10 = req.body.science10;
  lecTiming.maths10 = req.body.maths10;
  lecTiming.history10 = req.body.history10;
  lecTiming.geography10 = req.body.geography10;
  lecTiming.english12Com = req.body.english12Com;
  lecTiming.hindi12Com = req.body.hindi12Com;
  lecTiming.marathi12Com = req.body.marathi12Com;
  lecTiming.maths12Com = req.body.maths12Com;
  lecTiming.healthAndPhysicalEducation12Com =
    req.body.healthAndPhysicalEducation12Com;
  lecTiming.IT12Com = req.body.IT12Com;
  lecTiming.secretarialPractice12Com = req.body.secretarialPractice12Com;
  lecTiming.economics12Com = req.body.economics12Com;
  lecTiming.Bk12Com = req.body.Bk12Com;
  lecTiming.OrganizationofCommercendManagement12Com =
    req.body.OrganizationofCommercendManagement12Com;
  lecTiming.english12Sci = req.body.english12Sci;
  lecTiming.hindi12Sci = req.body.hindi12Sci;
  lecTiming.physics12Sci = req.body.physics12Sci;
  lecTiming.chemistry12Sci = req.body.chemistry12Sci;
  lecTiming.maths12Sci = req.body.maths12Sci;
  lecTiming.economics12Sci = req.body.economics12Sci;
  lecTiming.biology12Sci = req.body.biology12Sci;
  lecTiming.IT12Sci = req.body.IT12Sci;
  lecTiming.environmentalEducation12Sci = req.body.environmentalEducation12Sci;
  lecTiming.personalityDevelopment12Sci = req.body.personalityDevelopment12Sci;
  lecTiming.lecdate = req.body.lecdate;

  Lectures.findByIdAndUpdate({ _id: id }, lecTiming).then(function () {
    Lectures.findOne({ _id: id }).then(function (lecture) {
      // res.send(lecture);
      // res.redirect("/admin");
      res.status(200).send("Lecture Time Has Been Updated");
    });
  });
});

//creating api to fetch by client
router.get("/lecturedata", (req, res) => {
  Lectures.find({}).then((eachOne) => {
    res.status(200).json(eachOne);
  });
});

module.exports = router;
