const express = require("express");
const router = express.Router();
const Query = require("../../models/Query");
router.post("/query", (req, res) => {
  const { standard, studentname, attendinglec } = req.body;
  const addQuery = new Query({
    standard,
    studentname,
    attendinglec,
  });
  addQuery
    .save()
    .then((item) => {
      res.send("Thank you for let us Know ");
    })
    .catch((err) => {
      res.status(400).send("unable to save in Database");
    });
});
//creating api to fetch by client
router.get("/querydata", (req, res) => {
  Query.find({}).then((eachOne) => {
    res.status(200).json(eachOne);
  });
});

router.delete("/querydelete/:id", (req, res) => {
  Query.findByIdAndRemove({ _id: req.params.id })
    .then((result) => {
      res.status(200).send(`1 Query has Been Deleted`);
    })
    .catch((err) => {
      console.log("Something Wrong Happen ", err.message);
    });
});
module.exports = router;
