/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
const express = require("express");
const Issue = require("../models/Issue");
const Operator = require("../models/Operator");
const Vehicle = require("../models/Vehicle");

const router = express.Router();

const app = express();

// ROUTES

// Issue Routes
router.get("/add", async (req, res) => {
  const operators = await Operator.find({});
  const vehicles = await Vehicle.find({});
  res.render("issue/add", {
    operators,
    vehicles
  });
});

// Issue Form Submit Route
router.post("/add", async (req, res) => {
  const { vehicle, date, summary, description, priority, operator } = req.body;

  const issue = new Issue({
    vehicle,
    date,
    summary,
    description,
    priority,
    operator
  });

  await issue.save();
  res.redirect("/issue/all");
});

// Issue-list
router.get("/all", async (req, res) => {
  // const issues = await Issue.find({}).populate("vehicle"); // Populate function returns ID
  const issues = await Issue.find({}).populate("vehicle");
  console.log(issues)
  res.render("issue/all", {
    issues
  });
});

// Edit Route
router.get("/edit/:id", async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const id = req.params.id;
  const {
    vehicle,
    date,
    summary,
    description,
    priority,
    operator
  } = await Issue.findOne({ _id: id }).populate("vehicle");

  const issue = new Issue({
    vehicle,
    date,
    summary,
    description,
    priority,
    operator
  });

  const operators = await Operator.find({});
  const vehicles = await Vehicle.find({});

  res.render("issue/edit", {
    operators,
    vehicles,
    issue
  });
});

// Edit Issue Form Post Route
router.put("/edit/:id", async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const issue = await Issue.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  issue.save();
  res.redirect("/issue/all");
});


// Delete Route
router.get("/all/:id", function (req, res) {
  Issue.findByIdAndDelete({ _id: req.params.id }).then(() => {
    res.redirect("/issue/all");
  });
});

module.exports = router;
